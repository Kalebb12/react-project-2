import { createContext, useState } from "react";
import toast from "react-hot-toast";
export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async (email, password) => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      
      if (!res.ok) {
        console.log(res);
        toast.error("invalid credentials");
        throw new Error("invalid credentials");
      }

      const data = await res.json();
      console.log(data);

      if(data){
        toast.success("Login successful");
        localStorage.setItem("token", data.access_token);
        // window.location.href = "/dashboard";
        // return;
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };


  return <GlobalContext.Provider value={{login , email , setEmail , password , setPassword}}>{children}</GlobalContext.Provider>;
};
