import React from "react";

const NewsRelated = () => {
  const imgUrl="https://mediacloud.kiplinger.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1655841555/Investing/stock-market-today-062122.jpg";
 
  return (
    <div className="colum-relatedmain">
      <div className="card-related">
        <img src={imgUrl} className="related-img " alt="" />
        <div className="card-body-related">
          <div className="titulo-related">
            <h2>Elon Musk’s Daughter Files to Ditch His Last Name</h2>
          
          </div>

          <div className="description-related">
          <p className="p1">Maja Hitij/Getty\r\nOne of Elon Musk’s
             children has filed a petition for a name change,
             declaring that “I no longer live with or wish to 
             be related to my biological father in any way,
             shape or form.”The 18-year-old—whose full new name we 
             are withholding for pri…</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsRelated;
