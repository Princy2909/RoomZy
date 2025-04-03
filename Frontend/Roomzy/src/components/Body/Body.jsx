import React from "react";
import Feed from "../feed/feed";
import SearchSection from "../Search_Section/Search_section";
import "./Body.css";

const Body = () => {
  return (
    <div className="body-container">
      <SearchSection />
      <Feed />
    </div>
  );
};

export default Body;
