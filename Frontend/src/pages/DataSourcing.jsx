import React from 'react';

import DSHero from "../components/DSHero";
import DS from "../components/DS"

const DataSource = () => {
  console.log("DataSource rendered");
  return (
    <>
    <DSHero />
    <DS />
    </>
  );
};

export default DataSource;