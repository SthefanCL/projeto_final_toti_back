import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './assets/App.css';
import Home from "./components/Home";
import NovoCliente from './components/NovoCliente.js';

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <div className="Menu">
                <Link to="/"><button className="Home">Home</button></Link>
                <Link to="/new"><button className="buttonNovo">Novo Cliente</button></Link>
              </div>
              <div className="centro">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/new" element={<NovoCliente />} />
                </Routes>
              </div>
          
      </BrowserRouter>
     </div>
  );
};