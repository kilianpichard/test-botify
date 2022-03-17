import { useEffect, useState } from "react";

function BarChart ({google}) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (google && !chart) {
            const data = new google.visualization.DataTable();
            data.addColumn('string', 'Name');
            data.addColumn('number', 'Number');
            data.addRows([
                ['Components', 3],
                ['Views', 10],
                ['Styles', 5],
                ['Libraries', 2],
                ['Plugins', 1]
            ]);

            var options = {'title':'How I use React'};
            const newChart = new google.visualization.PieChart(document.getElementById('pizzaChart'));
            newChart.draw(data, options);

            setChart(newChart);
        }
    }, [chart]);

    return (
        <>
            <div id="BarChart"/>
        </>
    )
}

export default BarChart;