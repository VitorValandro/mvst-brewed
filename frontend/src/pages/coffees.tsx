import React from "react";
import {fetchAllCoffees} from "../app/coffees/application/coffee.service";
import {CoffeeMapper} from "../app/coffees/infrastructure/coffee.mapper";
import {CoffeePage} from "../app/coffees/presentation/pages/CoffeePage";
import {GetStaticProps} from "next";
import {CoffeeProps} from "src/app/coffees/domain/coffee";

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAllCoffees();
  return {
    props: {
      data,
    },
  };
};

export default function Index({data}: {data: CoffeeProps[]}): JSX.Element {
  const domainData = data.map(CoffeeMapper.toDomain);
  return <CoffeePage data={domainData} />;
}
