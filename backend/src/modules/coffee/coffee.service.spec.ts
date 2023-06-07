import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Coffee, CoffeeTag } from './coffee.entity';
import { CoffeeService } from './coffee.service';

const coffees: Coffee[] = [
  {
    id: 1,
    title: 'test',
    tag: CoffeeTag.ARABIC,
    imageUrl: 'url',
  },
  {
    id: 2,
    title: 'test',
    tag: CoffeeTag.ARABIC,
    imageUrl: 'url',
  },
  {
    id: 3,
    title: 'test',
    tag: CoffeeTag.ARABIC,
    imageUrl: 'url',
  },
  {
    id: 4,
    title: 'test',
    tag: CoffeeTag.ARABIC,
    imageUrl: 'url',
  },
];

const mockCoffeeRepository = {
  find: jest.fn(),
};

describe('Testing CoffeeService', () => {
  let service: CoffeeService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeeService,
        {
          provide: getRepositoryToken(Coffee),
          useValue: mockCoffeeRepository,
        },
      ],
    }).compile();

    service = module.get<CoffeeService>(CoffeeService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a list of coffees', async () => {
    mockCoffeeRepository.find.mockImplementationOnce(async () =>
      Promise.resolve(coffees),
    );

    const coffeeList = await service.list();
    expect(coffeeList).toEqual(coffees);
    expect(mockCoffeeRepository.find).toHaveBeenCalledTimes(1);
  });
});
