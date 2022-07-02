
import React from "react";
import {useState} from 'react';
import imagen from '../assets/elon.jpg';


const NewsList = ({registros}) => {
//const {url} = registros;
 console.log(registros.title);
 const urls =registros.url;
 const redirect = ()=>{
   
    window.open(urls,'_blank');
  
   
  } 
  return (
    <div className="columna-newsList" onClick={redirect}>
      <div className="cardList">
        <img src={registros.urlToImage}  className="card-img-list " alt="" />
        <div className="card-body-list">
          <div className="title-NewsList">
            <h2>{registros.title}</h2>
          </div>

          <div className="description">
            <p className="p1">{registros.content}</p>
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