import './App.css';
import googleCharts from "./utils/googleCharts";
import BarChart from "./components/BarChart";
function App() {
  const google = googleCharts();

  return (
      <>
          <BarChart google={google} />
      </>
  );
}

export default App;
