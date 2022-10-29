import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const ProtectGame = ({ children }) => {
  const navigate = useNavigate();
  const { player } = useAuthContext();

  if (!player) {
    console.log("Player YOK");
    return navigate("/");
  }

  return children;
};

export default ProtectGame;
