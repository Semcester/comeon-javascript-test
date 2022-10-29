import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const ProtectLogin = ({ children, auth }) => {
  const navigate = useNavigate();
  const { player } = useAuthContext();

  useEffect(() => {
    if (player) {
      return navigate("/casino");
    }
  });

  return children;
};

export default ProtectLogin;
