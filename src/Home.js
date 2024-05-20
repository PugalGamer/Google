import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Home() {
  const [log, setLog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Log"));
    setLog(user);
  }, []);
  console.log(log);
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const array = [
    {
      name: "Pugal",
    },
    {
      name: "Kevin",
    },
  ];

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("Log");
    navigate("/");
  };

  const handleClick = () => {
    console.log("click");
    navigate("/about", { state: array });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
