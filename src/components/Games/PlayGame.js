import React from "react";
import { useNavigate } from "react-router-dom";
import { useGameNameContext } from "../../context/useGameNameContext";
import { games } from "../../mock/game-list";

const PlayGame = () => {
  const { gameName } = useGameNameContext();
  const navigate = useNavigate();

  const handleBack = () => {
    localStorage.removeItem("gamename");
    navigate("/casino");
  };

  return (
    <div className="main container">
      <div className="ingame" style={{ display: "block" }}>
        <div className="ui grid centered">
          <div className="three wide column">
            <div
              className="ui right floated secondary button inverted"
              onClick={handleBack}
            >
              <i className="left chevron icon"></i>
              Back
            </div>
          </div>
          <div className="ten wide column">
            <div id="game-launch">
              <iframe
                title="game"
                id="game"
                style={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  display: "inherit",
                  frameBorder: "0",
                  width: "100%",
                  height: "370px",
                  scrolling: "no",
                }}
                allow="yes"
                src={games[gameName].src}
              ></iframe>
            </div>
          </div>
          <div className="three wide column"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
