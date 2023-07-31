import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResoponse<T> {
    count : number ,
    results : T[],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = <T>(endPoint : string , requestConfig?: AxiosRequestConfig , deps?: any[]) => {
    const [data, SetData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [ isLoding , setLoding] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoding(true);
    apiClient
      .get<FetchResoponse<T>>(endPoint , { signal: controller.signal , ...requestConfig })
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , deps  ? [...deps] : []);

  return {data  , error , isLoding}
}

export default useData;