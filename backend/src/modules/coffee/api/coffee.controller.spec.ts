import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { Test, TestingModule } from '@nestjs/testing';
import { Coffee } from '../entities/coffee.entity';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from '../service/coffee.service';
import { FindAllCoffeeQueryParamsDto } from '../dto/FindAllCofffeeQueryParams.dto';

const coffees: Coffee[] = [];

const mockCoffeeService = {
  list: jest.fn(),
};

describe('Testing CoffeeController getAll method', () => {
  let controller: CoffeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [{ provide: CoffeeService, useValue: mockCoffeeService }],
    }).compile();

    controller = module.get<CoffeeController>(CoffeeController);
    mockCoffeeService.list.mockImplementation(async () =>
      Promise.resolve(coffees),
    );
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get a list of coffees with an empty query as input', async () => {
    const coffeeList = await controller.getAll({});
    expect(coffeeList).toEqual(coffees);
    expect(mockCoffeeService.list).toHaveBeenCalledTimes(1);
  });

  it('should properly validate the titleFilter query param min length', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      titleFilter: 'a',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The title filter must have at least 3 characteres`,
    );
  });

  it('should properly validate the titleFilter query param as string', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      titleFilter: 1,
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The title filter must be a valid string`,
    );
  });

  it('should properly validate a valid titleFilter query param ', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      titleFilter: 'Valid filter',
    });
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should properly validate the tagFilter query param as a CoffeeTag', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      tagFilter: 'invalid',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The tag filter must be of value 'ROBUSTA' or 'ARABIC'`,
    );
  });

  it('should properly validate a valid tagFilter ROBUSTA query param', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      tagFilter: 'ROBUSTA',
    });
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should properly validate a valid tagFilter ARABIC query param', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      tagFilter: 'ARABIC',
    });
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should properly validate the pageNumber query param as an integer', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      pageNumber: 'invalid',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The page number must be a integer number`,
    );
  });

  it('should properly validate the pageNumber query param as an positive integer', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      pageNumber: '-1',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `he page number must be 0 or a positive integer`,
    );
  });

  it('should properly validate a valid pageNumber query param', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      pageNumber: '0',
    });
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should properly validate the pageSize query param as integer', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      pageSize: 'invalid',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The page size must be a integer number`,
    );
  });

  it('should properly validate the pageSize query param as an integer greater than 0', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      pageSize: '0',
    });
    const errors = await validate(dto);
    expect(errors.length).not.toBe(0);
    expect(JSON.stringify(errors)).toContain(
      `The page size must be greater than 0`,
    );
  });

  it('should properly validate a valid pageSize query param', async () => {
    const dto = plainToInstance(FindAllCoffeeQueryParamsDto, {
      pageSize: '10',
    });
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });
});
