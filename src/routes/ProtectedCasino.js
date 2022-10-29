import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const ProtectedCasino = ({ children, auth }) => {
  const navigate = useNavigate();
  const { player } = useAuthContext();

  if (!player) {
    return navigate("/");
  }

  return children;
};

export default ProtectedCasino;
