import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";


export function Register(){

  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  const[errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setErrors([]);
    if(password!== confirmPassword){
      setErrors(["Passwords do not match"]);
      return;
    }

    try{
      const res = await registerUser({username, email, password, confirmPassword});
      if(res.errors){
        setErrors(res.errors.map(err=> err.msg));
      }else{
        navigate("/login");
      }
    }catch(err){
      setErrors(["Something went wrong"]);
      console.log(err);
    }


  }

  return(
   <div className="login-container">
     <form onSubmit={handleSubmit}>
      <div className="formContent">
        <h2>Create User</h2>

        {errors.length > 0 && (
          <div style={{ color: "red" }}>
            {errors.map((err, i) => (
              <p key={i}>{err}</p>
            ))}
          </div>
        )}


        <div className="formGroup">
          <label htmlFor="username">Username:</label>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="username" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Password:</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" required />
        </div>

        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
        </div>


        <button>Register</button>
      </div>
    </form>
   </div>
  );
}