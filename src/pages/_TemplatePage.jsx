import React from "react";
import { Outlet } from "react-router-dom";  
import Header from "../components/Header";  
import Footer from "../components/Footer";  

export default function TemplatePage({ handleCollectionClick, token }) {
  return (
    <>
      <Header handleCollectionClick={handleCollectionClick} token={token} />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}
