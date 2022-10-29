import { GameNames } from "./PlayerContext";
import { useContext } from "react";

export const useGameNameContext = () => {
  const context = useContext(GameNames);

  return context;
};
