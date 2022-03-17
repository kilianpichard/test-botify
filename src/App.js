import './App.css';

import useFetchData from "./utils/fetchData";
import React, { useState } from "react";
import BarChart from "./components/BarChart";
import googleCharts from "./utils/googleCharts";
function App() {

    const google = googleCharts();
    const data = useFetchData();

  return (
      <>
          <BarChart google={google} data={data} />
      </>
  );
}

export default App;
