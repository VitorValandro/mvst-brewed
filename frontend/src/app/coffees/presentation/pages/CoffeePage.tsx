import React from "react";
import { Coffee } from "../../domain/coffee";
import { CoffeeCard } from "../components/CoffeeCard";
import Navbar from "src/components/Navbar/Navbar";
import menu from "src/core/navigation/menu";

type Props = {
  data: Coffee[];
};

export const CoffeePage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Navbar links={menu} />
      <div className="mx-10 mt-12 px-10">
        <h1 className="text-3xl mb-10">Welcome to MVST Coffee session </h1>
        {data.map((coffee, index) => (
          <CoffeeCard
            key={index}
            title={coffee.title}
            tag={coffee.tag}
            imageUrl={coffee.imageUrl}
          />
        ))}
      </div>
    </>
  );
};
