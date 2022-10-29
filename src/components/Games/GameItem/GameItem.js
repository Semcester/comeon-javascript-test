import React from "react";
import { useNavigate } from "react-router-dom";
import GameName from "../../../hooks/useGameName";

const GameItem = ({ game }) => {
  let gameImage = require(`../../../${game.icon}`);
  const navigate = useNavigate();
  const { getName } = GameName();

  const getGameName = (e) => {
    getName(e.code);
    navigate("/casino/game/" + e.code);
  };
  return (
    <div
      className="ui relaxed divided game items links "
      style={{ textAlign: "left" }}
    >
      <div className="game item">
        <div className="ui small image">
          <img src={gameImage} alt="game-icon" />
        </div>
        <div className="content">
          <div className="header">
            <b className="name">{game.name}</b>
          </div>
          <div className="description">{game.description}</div>
          <div className="extra" onClick={(e) => getGameName(game)}>
            <div className="play ui right floated secondary button inverted">
              Play
              <i className="right chevron icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
