import { useEffect, useState } from "react";

function UseFetchComponent(url){
    const [data, setdata] = useState();
    useEffect( () => {
        setTimeout( () => {
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error ('Data not Found');
                } else{
                    return res.json();
                }
            })
            .then((data)=>{
                setdata(data);
            })
            .catch((err) => console.log(err.message));
        }, 1000);
    }, [url]);

    return {data};
}

export default UseFetchComponent;