import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Tea } from '../entities/tea.entity';
import { TeaService } from './tea.service';

const teas: Tea[] = [
  {
    id: 1,
    title: 'test',
    imageUrl: 'url',
  },
  {
    id: 2,
    title: 'test',
    imageUrl: 'url',
  },
  {
    id: 3,
    title: 'test',
    imageUrl: 'url',
  },
  {
    id: 4,
    title: 'test',
    imageUrl: 'url',
  },
];

const mockTeaRepository = {
  createQueryBuilder: jest.fn(),
};

describe('Testing TeaService', () => {
  let service: TeaService;

  beforeEach(async () => {
    mockTeaRepository.createQueryBuilder.mockImplementation(() => ({
      skip: jest.fn().mockReturnValue(0),
      take: jest.fn().mockReturnValue(10),
      getMany: async () => Promise.resolve(teas),
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeaService,
        {
          provide: getRepositoryToken(Tea),
          useValue: mockTeaRepository,
        },
      ],
    }).compile();

    service = module.get<TeaService>(TeaService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a list of teas', async () => {
    const teaList = await service.list({});
    expect(teaList).toEqual(teas);
    expect(mockTeaRepository.createQueryBuilder).toHaveBeenCalledTimes(1);
  });
});
