export const helpHttp = () => {
    
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };


    options.method = options.method || "GET";
    options.headers = options.headers? { ...defaultHeader, ...options.headers }: defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    return fetch(endpoint, options)
      .then((res) =>{
       //console.log("respo",res);
        
        if(res.ok){
          return res.json();
        }else{
         return Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrió un error"
          });
        }
      }).catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  return {
    get
  };
};

