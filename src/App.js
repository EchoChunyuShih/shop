import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout.component";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import SignIn from "./routes/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      {/* <Footer /> */}
    </Routes>
  );
};
export default App;
