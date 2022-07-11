import React, { useContext, useState, useEffect } from "react";
import {  Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@mui/material/styles";
import {ToastContainer} from 'react-toastify'

import "react-toastify/dist/ReactToastify.css";
import { Home, List, Login, New, Analytics, News, Products, Logistics, Customers, NewCustomer, EditCustomer, TodoList } from "./Pages";
import { formInputs, products } from "./formInputs";
import { useThemeContext } from "./contexts/ThemeContext";
import { darkMode, lightMode, Loader } from "./styles";
import { AuthContext } from "./contexts/AuthContext";
import { Triangle } from "react-loader-spinner";



function App() {
  const darkTheme = useThemeContext();
  const switchTheme = darkTheme ? darkMode : lightMode;
  const { currentUser } = useContext(AuthContext);

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000);
  }, [])

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <ThemeProvider theme={switchTheme}>
      {loader ? (<Loader ><Triangle height="150" width="150" ariaLabel="loading-indicator" /></Loader>) : (
        <AnimatePresence exitBeforeEnter>
        <ToastContainer autoClose={2000} />
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />        
            <Route path="news" element={<RequireAuth><News /></RequireAuth>} />    
             <Route path="logistics" element={<RequireAuth><Logistics /></RequireAuth>}/>            
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>}/>             
              <Route path="new" element={<RequireAuth><New inputs={formInputs} title="Add new user" /></RequireAuth>}/>               
              <Route path="analytics" element={<RequireAuth><Analytics /></RequireAuth>}/>               
              <Route path="todolist" element={<RequireAuth><TodoList /></RequireAuth>}/>               
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><Products /></RequireAuth>}/>                   
              <Route path="new" element={<RequireAuth><New inputs={products} title="Add new Product" /></RequireAuth>}/>  
            </Route>
            <Route path="customers">
            <Route index element={<RequireAuth><Customers /></RequireAuth>}/> 
            <Route path=":id" element={<RequireAuth><EditCustomer /></RequireAuth>}/>
            <Route path='newcustomer' element={<RequireAuth><NewCustomer /></RequireAuth>}/>
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
        )}
      
    </ThemeProvider>
  );
}

export default App;
