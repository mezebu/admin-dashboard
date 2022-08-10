import React, {  useState, useEffect } from "react";
import {  Routes, Route,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@mui/material/styles";
import {ToastContainer} from 'react-toastify'
import { Triangle } from "react-loader-spinner";

import "react-toastify/dist/ReactToastify.css";
import { Home, List, New, Analytics, News, Products, Logistics, Customers, NewCustomer, EditCustomer, TodoList } from "./Pages";
import { formInputs, products } from "./formInputs";
import { useThemeContext } from "./contexts/ThemeContext";
import { darkMode, lightMode, Loader } from "./styles";

function App() {
  const location = useLocation()
  const darkTheme = useThemeContext();
  const switchTheme = darkTheme ? darkMode : lightMode;

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000);
  }, [])

  return (
    <ThemeProvider theme={switchTheme}>
      {loader ? (<Loader ><Triangle height="150" width="150" ariaLabel="loading-indicator" /></Loader>) : (
        <AnimatePresence exitBeforeEnter>
        <ToastContainer autoClose={2000} />
        <Routes key={location.pathname} location={location}>
          <Route path="/">
            <Route index element={<Home />} />        
            <Route path="news" element={<News />} />    
             <Route path="logistics" element={<Logistics />}/>            
            <Route path="users">
              <Route index element={<List />}/>             
              <Route path="new" element={<New inputs={formInputs} title="Add new user" />}/>               
              <Route path="analytics" element={<Analytics />}/>               
              <Route path="todolist" element={<TodoList />}/>               
            </Route>
            <Route path="products">
              <Route index element={<Products />}/>                   
              <Route path="new" element={<New inputs={products} title="Add new Product" />}/>  
            </Route>
            <Route path="customers">
            <Route index element={<Customers />}/> 
            <Route path=":id" element={<EditCustomer />}/>
            <Route path='newcustomer' element={<NewCustomer />}/>
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
        )}
      
    </ThemeProvider>
  );
}

export default App;
