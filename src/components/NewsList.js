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
          

import React, { useState, useEffect } from "react";

import NewsMain from "../components/NewsMain";
import NewsRelated from "../components/NewsRelated";
import NewsList from "../components/NewsList";

import "../styled-components/body.css";

import { helpHttp } from "../components/helpers/helpHttp";
import Loader from "../components/Loader";

const Body = () => {
  const [db, setDb] = useState([]);
  const [loading, setLoading] = useState(false);
  const [datitos, setDatos] = useState([]);

  useEffect(() => {
    let arrayNew = [];
    for (let i = 4; i < db.totalResults; i++) {
      arrayNew.push(db.articles[i]);
    }
    setDatos(arrayNew);

    console.log("nuevoArray", arrayNew);
  }, [db]);

  /*...................................................*/
  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://newsapi.org/v2/top-headlines?q=elon&apiKey=d13eb541d6c9422d8b4e416ed51b4f17";

      setLoading(true);

      const [newData] = await Promise.all([helpHttp().get(url)]);
      setDb(newData);

      setLoading(false);

      console.log("fechh", newData);
    };

    fetchData();
  }, []);

  console.log("datoPasado", db);
  console.log("datosarray", datitos);

  return (
    <div className="container-main">
      <div className="container">
        <div className="row">
          {db.length === 0 ? <Loader /> : <NewsMain data={db} />}
          <div className="conten-newsrelated">
            {db.length === 0 ? (
              <Loader />
            ) : (
              <>
                <NewsRelated data={db.articles[1]} />
                <NewsRelated data={db.articles[2]} />
                <NewsRelated data={db.articles[3]} />
              </>
            )}
          </div>
        </div>

        <div className="rowList">
          {datitos.length === 0 ? (
            <Loader />
          ) : (
            datitos.map((item, index) => (
              <NewsList key={index} registros={item} />
            ))
          )}

          {/*datos.map(index =>{
            return index ==""?<Loader/>:<> <NewsList key={index.title} dato={index}/> </>}
          )*/}

        </div>
      </div>
    </div>
  );
};


export default NewsList;

