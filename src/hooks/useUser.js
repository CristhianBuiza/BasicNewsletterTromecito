import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Identity from "@arc-publishing/sdk-identity";
import Context from "../context/UserContext";
import loginService from "../services/login";
export default function useUser() {
  const { isLogged, setIsLogged } = useContext(Context);
  const navigate = useNavigate();
  const [state, setState] = useState({ loading: false, error: true });
  const handleLogged = () => {
    Identity.isLoggedIn()
      .then((res) => {
        if (res === true) {
          setState({ loading: true, error: false });
          setIsLogged(true);
        }
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setIsLogged(false);
        setState({ loading: false, error: err });
      });
  };
  const login = (email, password) => {
    loginService(email, password)
      .then(() => {
        handleLogged();
      })
      .catch(({ message }) => {
        setState({ loading: false, error: message });
        console.log(message);
      });
  };
  const logout = () => {
    Identity.logout().then(() => {
      setState({ loading: false, error: false });
      setIsLogged(false);
    });
  };

  return {
    isLogged: Boolean(isLogged),
    isLogingLoading: state.loading,
    isLogingError: state.error,
    login,
    logout,
  };
}
