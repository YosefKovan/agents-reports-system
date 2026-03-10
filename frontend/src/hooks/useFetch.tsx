import { useEffect, useState } from "react"
import { redirect } from "react-router"
import AppError from "../errors/AppError"

interface ErrorInterface{
    code : number
    message : string
}

function useFetch<T>(url : string){
    
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | ErrorInterface>(null);
    const [apiData, setApiData] = useState<T | null | undefined>(null);

    useEffect(()=>{
        
        if(!url) return; 

        setLoading(true);

        async function fetchData(){

            try{
                
               const token = localStorage.getItem("token");
               
               if(!token){
                  redirect("/login");
               }

               const result = await fetch(url, {headers: {"Authorization" : `Bearer ${token}`}});
               
               const data = await result.json();

               if(!result.ok){
                  throw new AppError(data.message || "unknown error occured", result.status || 500);   
               }

               setApiData(data);
               
            }catch(err){

                if(err instanceof AppError){
                    setError({code : err.code, message : err.message})
                }else{
                    setError({code : 500, message : "unknown error occured"})
                }
            }finally{
                setLoading(false)
            }

        }

        fetchData();

    }, [url])

    return {loading, apiData, error}
}

export default useFetch;