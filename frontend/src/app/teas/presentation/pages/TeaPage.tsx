import React from "react";
import {Tea} from "../../domain/tea";
import {TeaCard} from "../components/TeaCard";
import Navbar from "src/components/Navbar/Navbar";
import menu from "src/core/navigation/menu";
import Head from "next/head";
import Footer from "src/components/Footer/Footer";

type Props = {
  data: Tea[];
};

export const TeaPage: React.FC<Props> = ({data}) => {
  return (
    <>
      <Head>
        <title>Brewed | Teas</title>
      </Head>
      <Navbar links={menu} />
      <div className="mx-1 px-6 md:mx-4 md:px-18 lg:mx-10 lg:px-24">
        <div className="my-10">
          <h1 className="text-3xl text-title font-semibold w-4/5">
            Just you, hot water and our tea
          </h1>
          <p className="text-lg text-paragraph mt-2">
            No pesticies or artificial flavours. We promise!
          </p>
        </div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((tea, index) => (
            <TeaCard key={index} title={tea.title} imageUrl={tea.imageUrl} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
