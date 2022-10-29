import { useEffect, useState } from "react";
import axios from "axios";

function useFetchGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  return { games };
}
export default useFetchGames;
