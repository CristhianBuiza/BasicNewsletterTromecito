
import React, { useState, useEffect } from "react";

import NewsMain from "../components/NewsMain";
import NewsRelated from "../components/NewsRelated";
import NewsList from "../components/NewsList";
import "../styled-components/body.css";
const Body = () => {
  useEffect(() => {
    document.title = "Tromecito";
  }, []);
import "../styled-components/body.css";

import { helpHttp } from "../components/helpers/helpHttp";
import Loader from "../components/Loader";

const Body = () => {
  const [db, setDb] = useState([]);
  const [bandera, setBandera] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://newsapi.org/v2/top-headlines?q=trump&apiKey=dcc618b794924da2bdb6f2fbbd2f45ce";

      setLoading(true);

      const [newData] = await Promise.all([helpHttp().get(url)]);
      setDb(newData);

      setLoading(false);
    };

    fetchData();
  }, []);

  let datos=[];
  for(let i=4;i<db.totalResults; i++){
    datos.push(db.articles[i]);
  }
  console.log("nuevoArray",datos);
  

  console.log("datoPasado", db);
  return (
    <div className="container-main">
      <div className="container">
        <div className="row">

          <NewsMain></NewsMain>
          <div className="conten-newsrelated">
            <NewsRelated></NewsRelated>
            <NewsRelated></NewsRelated>
            <NewsRelated></NewsRelated>

          {db == "" ? <Loader /> : <NewsMain data={db} />}
          <div className="conten-newsrelated">
            {db == "" ? (
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

          {datos.map(index =>{
            return db==""?<Loader/>:<> <NewsList key={index.title} dato={index}/> </>
            
            }
            
            )}

        </div>
      </div>
    </div>
  );
};

export default Body;
