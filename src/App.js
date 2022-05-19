import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { Home, List, Login, New, Single, Analytics, News } from "./Pages";
import { formInputs, products } from "./formInputs";
import { useThemeContext } from "./contexts/ThemeContext";
import { darkMode, lightMode } from "./styles";
import Product from "./Pages/Product/Product";
import { AuthContext } from "./contexts/AuthContext";


function App() {
  const darkTheme = useThemeContext();
  const switchTheme = darkTheme ? darkMode : lightMode;
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <ThemeProvider theme={switchTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />        
            <Route path="news" element={<RequireAuth><News /></RequireAuth>} />        
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>}/>          
              <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>}/>     
              <Route path="new" element={<RequireAuth><New inputs={formInputs} title="Add new user" /></RequireAuth>}/>               
              <Route path="analytics" element={<RequireAuth><Analytics /></RequireAuth>}/>               
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List /></RequireAuth>}/>   
              <Route path=":productId" element={<RequireAuth><Product /></RequireAuth>}/>                  
              <Route path="new" element={<RequireAuth><New inputs={products} title="Add new Product" /></RequireAuth>}/>  
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
