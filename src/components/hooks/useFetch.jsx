import { useEffect, useState } from "react";

const UseFetch = () => {
    const [loading , setLoading] = useState(true)
    const [err , setErr] = useState(null)
    const [data , setData] = useState([])
   useEffect(()=>{
    setLoading(true)
    setErr(null)
    fetch("https://dummyjson.com/products?sortBy=rating&order=desc&limit=10")
      .then((res) =>{ 
        if(!res.ok) {
            setErr("Failed To Fetch")
            setLoading(false)
        } 
       return res.json()}
    )
      .then((results) =>{ 
        setData(results.products) 
        setLoading(false)
    });
   },[])


    return {loading , err , data};
}
 
export default UseFetch;