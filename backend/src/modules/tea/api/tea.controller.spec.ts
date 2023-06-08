import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { Test, TestingModule } from '@nestjs/testing';
import { Tea } from '../entities/tea.entity';
import { TeaController } from './tea.controller';
import { TeaService } from '../service/tea.service';
import { FindAllTeaQueryParamsDto } from '../dto/FindAllTeaQueryParams.dto';

const teas: Tea[] = [];

const mockTeaService = {
  list: jest.fn(),
};

describe('Testing TeaController getAll method', () => {
  let controller: TeaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeaController],
      providers: [{ provide: TeaService, useValue: mockTeaService }],
    }).compile();

    controller = module.get<TeaController>(TeaController);
    mockTeaService.list.mockImplementation(async () => Promise.resolve(teas));
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get a list of teas with an empty query as input', async () => {
    const teaList = await controller.getAll({});
    expect(teaList).toEqual(teas);
    expect(mockTeaService.list).toHaveBeenCalledTimes(1);
  });

  it('should properly validate the titleFilter query param min length', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      titleFilter: 'a',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The title filter must have at least 3 characteres`,
    );
  });

  it('should properly validate the titleFilter query param as string', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      titleFilter: 1,
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The title filter must be a valid string`,
    );
  });

  it('should properly validate a valid titleFilter query param ', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      titleFilter: 'Valid filter',
    });
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should properly validate the pageNumber query param as an integer', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      pageNumber: 'invalid',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The page number must be a integer number`,
    );
  });

  it('should properly validate the pageNumber query param as an positive integer', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      pageNumber: '-1',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `he page number must be 0 or a positive integer`,
    );
  });

  it('should properly validate a valid pageNumber query param', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      pageNumber: '0',
    });
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should properly validate the pageSize query param as integer', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      pageSize: 'invalid',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The page size must be a integer number`,
    );
  });

  it('should properly validate the pageSize query param as an integer greater than 0', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      pageSize: '0',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The page size must be greater than 0`,
    );
  });

  it('should properly validate a valid pageSize query param', async () => {
    const dto = plainToInstance(FindAllTeaQueryParamsDto, {
      pageSize: '10',
    });
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });
});
