import { Search } from "./PlayerContext";
import { useContext } from "react";

export const useSearchContext = () => {
  const context = useContext(Search);

  return context;
};
