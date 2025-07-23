import React from "react";
import Feed from "../feed/feed";
import SearchSection from "../Search_Section/Search_section";
import Navbar from "../NavBar/Navbar";
import "./Body.css";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="body-container">
         <Navbar />
         <Outlet />
      <SearchSection />

      <Feed />
    </div>
  );
};

export default Body;