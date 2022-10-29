import React from "react";
import { useAuthContext } from "../../context/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Games from "../Games/Games";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";

const Casino = () => {
  const { player } = useAuthContext();
  const { logout } = useLogout();

  let avatarImage = "";
  if (player) {
    avatarImage = require(`../../${player.avatar}`);
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="main container">
      <div className="casino" style={{ display: "block" }}>
        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui list">
              <div className="player item">
                <img
                  className="ui avatar image"
                  src={avatarImage}
                  alt="avatar"
                />
                <div className="content">
                  <div className="header">
                    <b className="name">{player.name}</b>
                  </div>
                  <div className="description event">{player.event}</div>
                </div>
              </div>
            </div>
            <div
              className="logout ui left floated secondary button inverted"
              onClick={handleLogout}
            >
              <i className="left chevron icon"></i>Log Out
            </div>
          </div>
          <Search />
        </div>
        <div className="ui grid">
          <div className="twelve wide column">
            <h3 className="ui dividing header" style={{ textAlign: "left" }}>
              Games
            </h3>
            <Games />
          </div>
          <Categories />
        </div>
      </div>
    </div>
  );
};
export default Casino;
