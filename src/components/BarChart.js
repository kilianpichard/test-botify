import { useEffect, useState } from "react";

function BarChart ({google}) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (google && !chart) {

        }
    }, [chart]);

    return (
        <>
            <div id="BarChart"/>
        </>
    )
}

export default BarChart;