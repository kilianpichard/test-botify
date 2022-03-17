import './App.css';

import useFetchData from "./utils/fetchData";
import HomePage from "./views/HomePage";
import { useState } from "react";
function App() {


    const data = useFetchData();

  return (
      <>
          <HomePage data={data}/>
      </>
  );
}

export default App;
