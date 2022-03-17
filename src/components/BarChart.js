import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

function BarChart ({google,data}) {
    const [chart, setChart] = useState(null);
    const [selected, setSelected] = useState("");
    const [displayed, setDisplayed] = useState("");
    const [chartDisplay, setChartDisplay] = useState(true);
    const handleSelect = async (event) => {
        setSelected(event.target.value);
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row[0],
        },
        {
            name: 'Min estimated Diameter (Km)',
            selector: row => row[1],
        },
        {
            name: 'Max estimated Diameter (Km)',
            selector: row => row[2],
        },
    ];

    useEffect(() => {
        if (google && !chart && data) {

            let mapped = data.objects.filter(obj => selected === "" || obj[3] === selected);

            mapped = mapped.map(item => {
                return [item[0], item[1], item[2]];
            });

            let table = google.visualization.arrayToDataTable([
                ['Name', 'Min estimated diameter (km)', 'Max estimated diameter (km)'],
                ...mapped
            ]);

            setDisplayed(mapped);

            var options = {};

            var chart = new google.visualization.BarChart(document.getElementById('BarChart'));

            chart.draw(table, options);
            setChart(chart);
        }
    }, [google,data,selected]);

    return (
        <>
            <button onClick={() => setChartDisplay(!chartDisplay)}>Change Display</button>
            {!chart && <h1>Loading Data...</h1>}
                <select
                    value={selected}
                    onChange={e => {handleSelect(e)}}>
                    {data && data.planets.map(o => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>

            {chartDisplay.valueOf()}

            <div id="BarChart" style={{height: '100vh',width: '100vw',display:`${chartDisplay ? "block" : "none"}`}}/>
            {!chartDisplay && displayed && <DataTable columns={columns} data={displayed} />}

        </>
    )
}

export default BarChart;