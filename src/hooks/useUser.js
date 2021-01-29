/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useContext, useState } from "react";
import { loginUser, registerUser } from "../api";
import Context from "../context/UserContext";

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const signIn = useCallback(
    (user) => {
      setState({ loading: true, error: false });
      loginUser(user)
        .then((apiResponse) => {
          console.log("apiResponse", apiResponse);
          const token = apiResponse.data.token;
          window.sessionStorage.setItem("jwt_movies", token);
          setState({ loading: false, error: false });
          setJWT(token);
        })
        .catch(() => {
          window.sessionStorage.removeItem("jwt_movies");
          setState({ loading: false, error: true });
        });
    },
    [setJWT],
  );

  const signUp = useCallback(
    (user) => {
      setState({ loading: true, error: false });
      registerUser(user)
        .then((apiResponse) => {
          const token = apiResponse.data.token;
          window.sessionStorage.setItem("jwt_movies", token);
          setState({ loading: false, error: false });
          setJWT(token);
        })
        .catch(() => {
          window.sessionStorage.removeItem("jwt_movies");
          setState({ loading: false, error: true });
        });
      setJWT("test");
    },
    [setJWT],
  );

  const signOut = useCallback(() => {
    window.sessionStorage.removeItem("jwt_movies");
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    isLoading: state.loading,
    hasError: state.error,
    signIn,
    signUp,
    signOut,
  };
}
