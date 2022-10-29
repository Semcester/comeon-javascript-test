import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const nav = useNavigate();

  const isLoadings = isLoading;
  const errors = error;

  const login = async (username, password) => {
    try {
      const response = await axios({
        url: "http://localhost:3001/login",
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          username,
          password,
        },
      });
      if (response.data.status === "success") {
        localStorage.setItem("player", JSON.stringify(response.data.player));
        localStorage.setItem("username", username);
        dispatch({ type: "LOGIN", payload: response.data.player });
        setIsLoading(false);
        nav("/casino");
      }
    } catch (error) {
      setError(error.response.data.error);
      setIsLoading(true);
      nav("/");
    }
  };

  return { login, isLoadings, errors };
};
