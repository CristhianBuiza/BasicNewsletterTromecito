
import React from "react";
import {useState} from 'react';
import imagen from '../assets/elon.jpg';


const NewsList = ({dato}) => {

 const url = dato.url;
 const redirect = ()=>{
   
    window.open(url,'_blank');
  
   
  } 
  return (
    <div className="columna-newsList" onClick={redirect}>
      <div className="cardList">
        <img src={dato.urlToImage}  className="card-img-list " alt="" />
        <div className="card-body-list">
          <div className="title-NewsList">
            <h2>{dato.title}</h2>
          </div>

          <div className="description">
            <p className="p1">{dato.content}</p>
          </div>

          <div className="ver-articulo">
            <button>Ir a la Noticia</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsList;