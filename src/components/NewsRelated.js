import React from "react";

const NewsRelated = ({data}) => {

  /*console.log("news related",data);*/
  const imgUrl="https://mediacloud.kiplinger.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1655841555/Investing/stock-market-today-062122.jpg";
  return (
    <div className="colum-relatedmain">

      <div className="card-related">
        <img src={data.urlToImage} className="related-img " alt="" />
        <div className="card-body-related">
          <div className="titulo-related">
            <h2>{data.title}</h2>
          
          </div>

          <div className="description-related">
          <p className="p1">{data.content}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsRelated;
