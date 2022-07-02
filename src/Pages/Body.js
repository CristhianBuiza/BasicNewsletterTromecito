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

  const [datitos,setDatos] = useState([]);



  useEffect(() => {
    let arrayNew=[];
    for(let i=4;i<db.totalResults; i++){
      arrayNew.push(db.articles[i]);
    }
    setDatos(arrayNew);
    
    console.log("nuevoArray",arrayNew);

  },[db]);

  /*...................................................*/
  useEffect(() => {
      const fetchData = async () => {
        let url =
          "https://newsapi.org/v2/top-headlines?q=elon&apiKey=dcc618b794924da2bdb6f2fbbd2f45ce";

        setLoading(true);

        const [newData] = await Promise.all([helpHttp().get(url)]);
        setDb(newData);
        
        setLoading(false);
        
        console.log("fechh",newData);
      };

      fetchData();
      
    
  }, []);
  /*--------------------------------------------------*/

  

  
  console.log("datoPasado", db);
  console.log("datosarray",datitos);
  
=======
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
  /*--------------------------------------------------*/

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


      </div>
    </div>
  );
};

export default Body;
