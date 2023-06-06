import React from "react";
import { fetchCoffeeService } from "../app/coffees/application/fetchCoffeeService";
import { CoffeeMapper } from "../app/coffees/infrastructure/coffee.mapper";
import { CoffeePage } from "../app/coffees/presentation/pages/CoffeePage";
import { GetStaticProps } from "next";
import { CoffeeProps } from "src/app/coffees/domain/coffee";

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchCoffeeService();
  return {
    props: {
      data,
    },
  };
};

export default function Index({ data }: { data: CoffeeProps[] }): JSX.Element {
  const domainData = data.map(CoffeeMapper.toDomain);
  return <CoffeePage data={domainData} />;
}
