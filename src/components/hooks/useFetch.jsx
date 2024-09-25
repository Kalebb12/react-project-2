import { useEffect, useState } from "react";

const UseFetch = ({URL}) => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    setErr(null);
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw(new Error("Failed To Fetch"))
        }
        return res.json();
      })
      .then((results) => {
        setData(results.products);
        setLoading(false);
      })
      .catch((error) => {
        setErr(error.message)
        setLoading(false)
      });
  }, []);

  return { loading, err, data };
};

export default UseFetch;
