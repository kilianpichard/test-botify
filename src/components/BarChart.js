import React, { useEffect, useState } from "react";

function BarChart ({google,data}) {
    const [chart, setChart] = useState(null);
    const [selected, setSelected] = useState(null);

    const handleSelect = async (event) => {
        setSelected(event.target.value);
    };

    useEffect(() => {
        if (google && !chart && data) {

            let displayed = data.objects.filter(obj => selected === null || obj[3] === selected);

            displayed = displayed.map(item => {
                return [item[0], item[1], item[2]];
            });

            let table = google.visualization.arrayToDataTable([
                ['Name', 'Min estimated diameter (km)', 'Max estimated diameter (km)'],
                ...displayed
            ]);

            var options = {};

            var chart = new google.visualization.BarChart(document.getElementById('BarChart'));

            chart.draw(table, options);
            setChart(chart);
        }
    }, [google,data,selected]);

    return (
        <>
            {!chart && <h1>Loading Data...</h1>}
                <select
                    value={selected}
                    onChange={e => {handleSelect(e)}}>
                    {data && data.planets.map(o => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>
            <div id="BarChart" style={{height: '100vh',width: '100vw'}}/>
        </>
    )
}

export default BarChart;