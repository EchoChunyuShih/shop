import React from "react";
import Footer from "./components/layout/Footer";
import Navigator from "./components/layout/Navigator";
import GlobalCss from "./global.css";
import CategoryMenu from "./components/category/CategoryMenu";

const App = () => {
  return (
    <>
      <GlobalCss />
      <Navigator />
      <CategoryMenu />
      <Footer />
    </>
  );
};
export default App;
