import React,{useState} from 'react';
import BarChart from "../components/BarChart";
import googleCharts from "../utils/googleCharts";

const HomePage = ({data}) => {

    const [selected, setSelected] = useState(null);

    const google = googleCharts();

    if(data){
        if(selected == null){
            setSelected(data.planets[0]);
        }

        return (
            <div>
                <select
                    value={selected}
                    onChange={e => {setSelected(e.target.value)}}>
                    {data.planets.map(o => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>
                test {selected}
                <BarChart google={google} data={data} />
            </div>
        );
    }
return null;


};

export default HomePage;