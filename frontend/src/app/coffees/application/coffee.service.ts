import API_URL from "src/common/api";
import { CoffeeProps } from "../domain/coffee";

export const fetchAllCoffees = async (): Promise<CoffeeProps[]> => {
  const res = await fetch(`${API_URL}/coffee`);
  const data = await res.json();

  return data;
};
