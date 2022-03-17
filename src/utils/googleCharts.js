import { useEffect, useState } from "react";

function useGoogleCharts () {
    const [google, setGoogle] = useState(null);

    useEffect(() => {

        if (!google) {

            const head = document.head;
            let script = document.getElementById('googleChartsScript');

            //  If script is not there, add it to the head
            if (!script) {

                //  Create script tag with google charts script
                script = document.createElement('script');
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.id = 'googleChartsScript';

                // Once script is loaded, load google charts and set state to get google between components
                script.onload = () => {
                    if (window.google && window.google.charts) {
                        window.google.charts.load('current', {'packages':['corechart']});

                        window.google.charts.setOnLoadCallback(() => setGoogle(window.google))
                    }
                };

                //  Add script to head
                head.appendChild(script);

            } else if (window.google && window.google.charts && window.google.visualization) {

                //  If script is already there, set state to get google between components
                setGoogle(window.google);

            }
        }

    }, [google]);

    return google;
}

export default useGoogleCharts;