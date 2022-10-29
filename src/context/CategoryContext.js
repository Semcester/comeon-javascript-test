import { Category } from "./PlayerContext";
import { useContext } from "react";

export const useCategoryContext = () => {
  const context = useContext(Category);

  return context;
};
