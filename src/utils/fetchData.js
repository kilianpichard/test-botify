import {useEffect, useState} from "react";

function useFetchData(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://www.neowsapp.com/rest/v1/neo/browse?page=1&size=20&api_key=DEMO_KEY")
            .then(response => response.json())
            .then((res) => {
                let mapped = res.near_earth_objects.map(item => {
                    return [item.name,
                        item.estimated_diameter.kilometers.estimated_diameter_min,
                        item.estimated_diameter.kilometers.estimated_diameter_max,
                    ]
                }).sort((a, b) => ((b[1]+b[2])/2) - ((a[1]+a[2])/2));
                setData(mapped);
            }).catch(err => console.log(err));
    },[]);

    return data;
}

export default useFetchData;