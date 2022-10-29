import { PlayerContext } from "../context/PlayerContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(PlayerContext);

  return context;
};
