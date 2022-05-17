import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

export default function App() {
  
  return (
    <div className="App">
      {/* navbar section */}
      <Navbar/>
      {/* body main section */}
      <Main/>
      {/* footer section */}
      <Footer/>
    </div>
  );
};
