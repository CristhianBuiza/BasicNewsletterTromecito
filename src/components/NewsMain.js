import React from "react";
import {useState} from 'react';



const NewsMain = ({data}) => {
console.log("news",data);
const url = data.articles[0].url;
 const redirect = ()=>{
   
    window.open(url,'_blank');
  
   
  }
  return (
    <div className="columna-newsmain" onClick={redirect}>
      <div className="card text-center">
        <img src={data.articles[0].urlToImage} className="card-img " alt="" />
        <div className="card-body">
          <div className="title">
            <h2>{data.articles[0].title}</h2>
          </div>

          <div className="description">
            <p className="p1">{data.articles[0].content}</p>
          </div>

          <div className="ver-articulo">
            <button>Ir a la Noticia</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
