import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
export default function useUser() {
  const { jwt, setJwt } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: true });
  const login = useCallback(
    (email, password) => {
      setState({ loading: true, error: false });
      loginService(email, password)
        .then((accessToken) => {
          window.sessionStorage.setItem("jwt", accessToken);
          setState({ loading: true, error: "" });
          setJwt(accessToken);
        })
        .catch(({ message }) => {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: message });
          console.log(message);
        });
    },
    [setJwt]
  );
  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJwt("");
  }, [setJwt]);

  return {
    isLogged: Boolean(jwt),
    isLogingLoading: state.loading,
    isLogingError: state.error,
    login,
    logout,
  };
}
