import Identity from "@arc-publishing/sdk-identity";
const urlBase = "https://api-sandbox.elcomercio.pe";
export default function login(email, password) {
  Identity.apiOrigin = urlBase;

  return Identity.login(email, password, { rememberMe: true })
    .then((res) => {
      if (!res === true) throw new Error("No se pudo iniciar sesión");
      console.log(res);
      return res;
    })
    .then((res) => {
      const { accessToken } = res;
      return accessToken;
    });
}
