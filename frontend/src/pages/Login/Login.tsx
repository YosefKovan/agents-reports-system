import "./Login.css";
import "../../index.css";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import AppError from "../../errors/AppError";
import AlertComponent from "../../components/AlertComponent/AlertComponent";

const URL = "http://localhost:3000/auth/login";

interface ErrorState {
  error: boolean;
  message: string;
  code: number | null;
}

//========================================
//            Login component
//========================================
function Login() {
  const [error, setError] = useState<ErrorState>({error: false, message: "", code: null});
  const [password, setPassword] = useState<string>("");
  const [agentCode, setAgentCode] = useState<string>("");
  
  const navigate = useNavigate();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const result = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ password, agentCode }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await result.json();
      
      
      if (!result.ok) {
        throw new AppError(data.error || "Request failed", result.status);
      }
      
      localStorage.setItem("token", data.token);

      navigate(`/${data?.user?.role.toLowerCase()}/dashboard`);

    } catch (err) {
        
        const errorObject : ErrorState  = {
          error: true,
          message: err instanceof AppError ? err.message : "Unknown error",
          code: err instanceof AppError ? err.code : 500 
        }

        setError(errorObject);
    }
  }

  return (
    <main className="login-page">
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <h1 className="login-header">Login</h1>
          {error.error && 
            <AlertComponent code={error.code || 500} message={error.message} className="fail"/>
          }
          <div className="form-container">
            <input
              value={agentCode}
              onChange={(e) => setAgentCode(e.target.value)}
              placeholder="Enter agent code..."
            />
          </div>
          <div className="form-container">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password..."
            />
          </div>
          <div className="from-btn-container">
            <button>Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
