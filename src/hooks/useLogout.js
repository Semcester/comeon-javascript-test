import { useAuthContext } from "../context/useAuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const nav = useNavigate();

  const logout = async () => {
    const username = localStorage.getItem("username");

    const response = await axios({
      url: "http://localhost:3001/logout",
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        username: username,
      },
    });
    if (response.data.status === "success") {
      localStorage.clear();
      dispatch({ type: "LOGOUT" });
      nav("/");
    }
  };
  return { logout };
};
