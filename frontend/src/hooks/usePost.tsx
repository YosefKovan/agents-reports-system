import { useState } from "react";
import AppError from "../errors/AppError";
import {redirect } from "react-router"

interface ErrorInterface{
    code : number
    message : string
}


const usePost = () => {
  
  const [error, setError] = useState<ErrorInterface | null>(null);
  const [success, setSuccess] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean | null>(null)

  async function sendData(url : string, method : string, body : FormData | string, header : {"Content-Type" : string} | {} = {}) {
    
    setSuccess(null);
    setError(null);

    try {
      
      const token = localStorage.getItem("token");

      if (!token) {
        redirect("/login");
      }

      const result = await fetch(url, {
        method,
        body,
        headers : { Authorization: `Bearer ${token}`, ...header}
      });

      const data = await result.json();
      
      console.log(data.message);
      

      if (!result.ok) {
        throw new AppError(data.error || "unknown error occured", result.status || 500);
      }
      
      setSuccess(data?.message || "data sent successfully.");

      return data;
      
    } catch (err) {
      if (err instanceof AppError) {
        setError({ code: err.code, message: err.message });
      } else {
        setError({ code: 500, message: "unknown error occured" });
      }
    } finally {
      setLoading(false);
    }
  }

  return {sendData, error, success, loading};
};

export default usePost;
