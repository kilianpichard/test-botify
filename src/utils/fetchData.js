import {useEffect, useState} from "react";

function useFetchData(){
    const [data,setData] = useState(null);

    useEffect(()=>{
        console.log("Fetching data...");
        fetch("http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=DEMO_KEY")
            .then(response => response.json())
            .then((res) => {

                let returnData = {planets: ["Choose a planet"], objects: []};

                res.near_earth_objects.forEach(element => {

                    let arr = element.close_approach_data;

                    //  Sorting the array based on date, the closest date to the current date is the first element
                    arr = arr.sort(function (a, b) {
                        let distancea = Math.abs(new Date() - new Date(a.close_approach_date_full));
                        let distanceb = Math.abs(new Date() - new Date(b.close_approach_date_full))
                        return distancea - distanceb;
                    });

                    // Get the closest date, to get the current orbiting body
                    element.planet = arr[0].orbiting_body;

                    // If the current orbiting body is not present in the array, add it
                    if (returnData.planets.indexOf(element.planet) === -1) {
                        returnData.planets.push(element.planet);
                    }

                });

                //Map the data to the correct format
                returnData.objects = res.near_earth_objects.map(item => {
                    return [item.name,
                        item.estimated_diameter.kilometers.estimated_diameter_min,
                        item.estimated_diameter.kilometers.estimated_diameter_max,
                    ]
                }).sort((a, b) => ((b[1] + b[2]) / 2) - ((a[1] + a[2]) / 2));

                setData(returnData);

            }).catch(err => console.log(err));
    },[]);

    return data;
}

export default useFetchData;