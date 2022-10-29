import { useEffect } from "react";
import { useSearchContext } from "../context/SearchContext";

const SearchText = () => {
  const { dispatch } = useSearchContext();

  useEffect(() => {
    localStorage.removeItem("category");
  }, []);

  const getText = async (text) => {
    if (text !== undefined) {
      localStorage.setItem("searchTerm", text);
      dispatch({ type: "SET", payload: text });
    } else {
      localStorage.removeItem("searchTerm");
    }
  };

  return { getText };
};
export default SearchText;
