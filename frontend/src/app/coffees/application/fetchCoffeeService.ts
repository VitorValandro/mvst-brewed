import { CoffeeProps } from "../domain/coffee";
import { CoffeeFacade } from "../infrastructure/coffee.facade";

export const fetchCoffeeService = async (): Promise<CoffeeProps[]> => {
  return await new CoffeeFacade().fetchAll();
};
