import React, { useState, createContext, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Second from "./Second";
import Third from "./Third";
import axios from "axios";
import Cookies from "js-cookie";

export const AppContext = createContext(null);
export default function New() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [store, setStore] = useState("");

  useEffect(() => {
    axios.get(`https://project-data-rn8z.onrender.com/Users`).then((res) => {
      setStore(res.data);
    });
  }, []);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="App">
      <h1> GoogleLogin</h1>
      <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
        <span>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
              navigate("/second");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </span>
      </div>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <AppContext.Provider value={{ name, store }}>
        <Second />
        <Third store={store} />
      </AppContext.Provider>
    </div>
  );
}
