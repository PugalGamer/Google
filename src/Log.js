import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Log() {
  const [store, setStore] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://project-data-rn8z.onrender.com/Users`).then((res) => {
      setStore(res.data);
      console.log(res.data);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let log = store.find((e) => e.email === email && e.password === password);
    if (log) {
      localStorage.setItem("Log", JSON.stringify(log));
      const token = btoa(`${email}:${password}`); // In a real-world app, generate a JWT token from the server
      Cookies.set("token", token, { expires: 1 }); // Expires in 1 day
      console.log("success");
      alert("success");
      navigate("/home");
    } else {
      alert("fail");
      console.log("fail");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleClick}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>submit</button>
        <br />
      </form>
    </div>
  );
}
