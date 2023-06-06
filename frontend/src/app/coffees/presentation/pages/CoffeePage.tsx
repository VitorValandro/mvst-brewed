import React from "react";
import {Coffee} from "../../domain/coffee";
import {CoffeeCard} from "../components/CoffeeCard/CoffeeCard";
import Navbar from "src/components/Navbar/Navbar";
import menu from "src/core/navigation/menu";
import Head from "next/head";
import Footer from "src/components/Footer/Footer";

type Props = {
  data: Coffee[];
};

export const CoffeePage: React.FC<Props> = ({data}) => {
  return (
    <>
      <Head>
        <title>Brewed | Coffees</title>
      </Head>
      <Navbar links={menu} />
      <div className="mx-1 px-6 md:mx-4 md:px-18 lg:mx-10 lg:px-24">
        <div className="my-10">
          <h1 className="text-3xl text-title font-semibold w-4/5">
            Our beloved coffee
          </h1>
          <p className="text-lg text-paragraph mt-2">
            Hand-picked, made with love, curated, call it what you want. But we
            promise you, this will be the best coffe of your life.
          </p>
        </div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((coffee, index) => (
            <CoffeeCard
              key={index}
              title={coffee.title}
              tag={coffee.tag}
              imageUrl={coffee.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
