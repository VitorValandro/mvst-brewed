import React from "react";

import {fetchTeaService} from "src/app/teas/application/fetchTeaService";
import {TeaMapper} from "src/app/teas/infrastructure/tea.mapper";
import {TeaPage} from "src/app/teas/presentation/pages/TeaPage";

export async function getStaticProps() {
  const data = await fetchTeaService();
  return {
    props: {
      data,
    },
  };
}

export default function Index({data}: any): JSX.Element {
  const domainData = data.map(TeaMapper.toDomain);
  return <TeaPage data={domainData} />;
}
