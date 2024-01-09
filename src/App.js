import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import CustomNavbar from "./components/UI/navbar/CustomNavbar";

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
