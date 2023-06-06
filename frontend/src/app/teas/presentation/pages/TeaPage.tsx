import React from "react";
import {Tea} from "../../domain/tea";
import {TeaCard} from "../components/TeaCard";

type Props = {
  data: Tea[];
};

export const TeaPage: React.FC<Props> = ({data}) => {
  return (
    <div className="mx-10 mt-12 px-10">
      <h1 className="text-3xl mb-10">Welcome to MVST Tea session </h1>
      {data.map((coffee) => (
        <TeaCard title={coffee.title} imageUrl={coffee.imageUrl} />
      ))}
    </div>
  );
};
