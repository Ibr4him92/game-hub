import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number , 
  name: string, 
  slug: string, 

}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform : Platform } [];
    metacritic : number;
  }
  
  interface FetchGames {
    count: number;
    results: Game[];
  }
  

const useGames = () => {
  const [games, SetGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [ isLoding , setLoding] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoding(true);
    apiClient
      .get<FetchGames>("/games" , { signal: controller.signal })
      .then((res) => {
        SetGames(res.data.results) 
        setLoding(false)
      })
      .catch((err) => {
        if ( err instanceof CanceledError) return;
        setError(err.message)
        setLoding(false)
      });

     return () => controller.abort();
  } , []);

  return {games  , error , isLoding}
}

export default  useGames;