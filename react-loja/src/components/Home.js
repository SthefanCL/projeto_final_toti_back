import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cards from "./Cards.js";

export default function Home() {

  const URL = "http://localhost:3001/produtos";

  const [state, setState] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL);
    return response;
  };

  useEffect(() => {
    getData().then((response) => {
      setState(response.data)
    })
  }, []);

  return (
    <div className="Home">
      {state.map((produto, key) => (
        <Cards key={key} produto={produto} />
      ))}
    </div> 
  );
}