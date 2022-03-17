import { useEffect, useState } from "react";

function BarChart ({google,data}) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (google && !chart && data) {

            let table = google.visualization.arrayToDataTable([
                ['Name', 'Min estimated diameter (km)', 'Max estimated diameter (km)'],
                ...data.objects
            ]);

            var options = {};

            var chart = new google.visualization.BarChart(document.getElementById('BarChart'));

            chart.draw(table, options);
            setChart(chart);
        }
    }, [google,data]);

    return (
        <>
            {!chart && <h1>Loading Data...</h1>}
            <div id="BarChart" style={{height: '100vh',width: '100vw'}}/>
        </>
    )
}

export default BarChart;