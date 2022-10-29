import React from "react";
import useFetchGames from "../../hooks/FetchGames";
import GameItem from "./GameItem/GameItem";
import { useSearchContext } from "../../context/SearchContext";
import { useCategoryContext } from "../../context/CategoryContext";
import Lottie from "lottie-react";
import Casino from "./animation/123093-casino-jackpot.json";

const Games = () => {
  const games = useFetchGames();
  const { text } = useSearchContext();
  const { id } = useCategoryContext();

  const gamesList = games.games;
  let filtered = gamesList;

  if (text) {
    filtered = filtered.filter((game) =>
      game.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  if (id) {
    filtered = filtered.filter((game) => game.categoryIds.includes(id));
  }

  if (filtered.length === 0) {
    return (
      <div>
        <h3 className="ui header" style={{ textAlign: "center" }}>
          No Games Found
        </h3>
        <Lottie
          animationData={Casino}
          loop={true}
          style={{ height: "10rem" }}
        />
      </div>
    );
  }
  console.log(filtered.length);

  return filtered.map((game) => {
    return <GameItem key={game.name} game={game} />;
  });
};

export default Games;
