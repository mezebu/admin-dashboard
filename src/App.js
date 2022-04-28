import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, List, Login, New, Single } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<New />} />
            <Route path="single" element={<Single />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<New />} />
            <Route path="product" element={<Single />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
