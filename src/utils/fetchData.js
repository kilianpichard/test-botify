import {useEffect, useState} from "react";

function useFetchData(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://www.neowsapp.com/rest/v1/neo/browse?page=1&size=20&api_key=DEMO_KEY")
            .then(response => response.json())
            .then((res) => {
                setData(res.near_earth_objects);
            }).catch(err => console.log(err));
    },[]);

    return data;
}

export default useFetchData;