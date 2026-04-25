import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const data = await loginUser({email, password});
      if(data.token){
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
      if (data.role === "ADMIN") {
        window.location.href = `http://localhost:5174?token=${data.token}&role=${data.role}&username=${data.username}`; 
      }else {
        navigate("/"); 
      }

      }

    }catch(err){
      console.log("Login failed:", err);
      alert("Invalid credentials");
    }
    
    
  }

  return(
  
  <div className="login-container">
  <form onSubmit={handleSubmit} className="login-form">
    <div className="formContent">
      <h2>User Login</h2>

      <div className="formGroup">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
      </div>

      <div className="formGroup">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
      </div>

      <button>Login</button>
    </div>
  </form>
</div>
    

  );
}