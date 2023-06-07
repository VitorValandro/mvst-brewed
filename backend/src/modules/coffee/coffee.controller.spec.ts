import { Test, TestingModule } from '@nestjs/testing';
import { Coffee } from './coffee.entity';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

const coffees: Coffee[] = [];

const mockCoffeeService = {
  list: jest.fn(),
};

describe('Testing CoffeeController', () => {
  let controller: CoffeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [{ provide: CoffeeService, useValue: mockCoffeeService }],
    }).compile();

    controller = module.get<CoffeeController>(CoffeeController);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get a list of coffees', async () => {
    mockCoffeeService.list.mockImplementationOnce(async () =>
      Promise.resolve(coffees),
    );

    const coffeeList = await controller.getAll();
    expect(coffeeList).toEqual(coffees);
    expect(mockCoffeeService.list).toHaveBeenCalledTimes(1);
  });
});
