import {GetStaticProps} from "next";
import React from "react";

import {fetchAllTeas} from "src/app/teas/application/tea.service";
import {TeaProps} from "src/app/teas/domain/tea";
import {TeaMapper} from "src/app/teas/infrastructure/tea.mapper";
import {TeaPage} from "src/app/teas/presentation/pages/TeaPage";

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAllTeas();
  return {
    props: {
      data,
    },
  };
};

export default function Index({data}: {data: TeaProps[]}): JSX.Element {
  const domainData = data.map(TeaMapper.toDomain);
  return <TeaPage data={domainData} />;
}
