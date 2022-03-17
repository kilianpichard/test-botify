import './App.css';
import googleCharts from "./utils/googleCharts";
import BarChart from "./components/BarChart";
import useFetchData from "./utils/fetchData";
function App() {

  const google = googleCharts();
  const data = useFetchData();

  console.log(data);
  return (
      <>
          <BarChart google={google} />
      </>
  );
}

export default App;
