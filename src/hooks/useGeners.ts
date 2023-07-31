import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id : number , 
    name : string ,
}

interface FetchGeners {
    count : number ,
    results : Genre[],
}

const useGeners = () => {
    const [geners, SetGeners] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [ isLoding , setLoding] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoding(true);
    apiClient
      .get<FetchGeners>("/games" , { signal: controller.signal })
      .then((res) => {
        SetGeners(res.data.results) 
        setLoding(false)
      })
      .catch((err) => {
        if ( err instanceof CanceledError) return;
        setError(err.message)
        setLoding(false)
      });

     return () => controller.abort();
  } , []);

  return {geners  , error , isLoding}
}

export default useGeners;