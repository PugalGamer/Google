import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function About() {
  const locate = useLocation();
  console.log(locate);

  const navigate = useNavigate();
  useEffect(() => {
    const token=Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  console.log(locate.state?.map((e) => e.name));
  return (
    <div>
      <h1>About</h1>
      {locate && locate.state?.map((e) => <h1>{e.name}</h1>)}
    </div>
  );
}
