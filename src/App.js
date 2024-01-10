import React, { useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import CustomNavbar from "./components/UI/navbar/CustomNavbar";
import { AuthContext } from "./context";

import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <CustomNavbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
