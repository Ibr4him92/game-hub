import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

interface FetchResoponse<T> {
    count : number ,
    results : T[],
}

const useData = <T>(endPoint : string) => {
    const [data, SetData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [ isLoding , setLoding] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoding(true);
    apiClient
      .get<FetchResoponse<T>>(endPoint , { signal: controller.signal })
      .then((res) => {
        SetData(res.data.results) 
        setLoding(false)
      })
      .catch((err) => {
        if ( err instanceof CanceledError) return;
        setError(err.message)
        setLoding(false)
      });

     return () => controller.abort();
  } , []);

  return {data  , error , isLoding}
}

export default useData;