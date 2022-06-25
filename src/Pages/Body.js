import React from "react";
import { useEffect } from "react";
import NewsMain from "../components/NewsMain";
import NewsRelated from "../components/NewsRelated";
import NewsList from "../components/NewsList";

import "../styled-components/body.css";

const Body = () => {
  useEffect(() => {
    document.title = "Tromecito";
  }, []);
  return (
    <div className="container-main">
      <div className="container">
        <div className="row">
          <NewsMain></NewsMain>
          <div className="conten-newsrelated">
            <NewsRelated></NewsRelated>
            <NewsRelated></NewsRelated>
            <NewsRelated></NewsRelated>
          </div>
        </div>

        <div className="rowList">
          <NewsList></NewsList>
          <NewsList></NewsList>
          <NewsList></NewsList>
        </div>
      </div>
    </div>
  );
};

export default Body;
