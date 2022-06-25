import Identity from "@arc-publishing/sdk-identity";
const urlBase = "https://api-sandbox.elcomercio.pe";
export default function getUserProfile({
  emailRegistro,
  nombresRegistro,
  apepaternoRegistro,
  apematernoRegistro,
  telRegistro,
  tipdocRegistro,
  numdocRegistro,
}) {
  Identity.apiOrigin = urlBase;

  return Identity.getUserProfile().then((res) => {
    const { email, firstName, lastName, secondLastName, contacts, attributes } =
      res;
    const phonUser = contacts[0].phone;
    const tipDocUser = attributes[0].value;
    const numDocUser = attributes[1].value;
    setDataRegistro({
      emailRegistro: email,
      nombresRegistro: firstName,
      apepaternoRegistro: lastName,
      apematernoRegistro: secondLastName,
      telRegistro: phonUser,
      tipdocRegistro: tipDocUser,
      numdocRegistro: numDocUser,
    });
  });
}
