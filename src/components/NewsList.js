
import React from "react";
import {useState} from 'react';
import imagen from '../assets/elon.jpg';


const NewsList = () => {

  const[url,setUrl] = useState("");
 const redirect = ()=>{
   
    window.open("https://www.channelnewsasia.com/world/elon-musks-child-seeks-name-change-sever-ties-father-2759586",'_blank');
  
   
  } 
  return (
    <div className="columna-newsList" onClick={redirect}>
      <div className="cardList">
        <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1693,w_3009,x_0,y_168/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1655764574/GettyImages-1288827236_rwklat"  className="card-img-list " alt="" />
        <div className="card-body-list">
          <div className="title">
            <h2>Elon Musk’s Daughter Files to Ditch His Last Name</h2>
          </div>

          <div className="description">
            <p className="p1">Maja Hitij/Getty\r\nOne of Elon Musk’s
             children has filed a petition for a name change,
             declaring that “I no longer live with or wish to 
             be related to my biological father in any way,
             shape or form.”The 18-year-old—whose full new name we 
             are withholding for pri…</p>
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