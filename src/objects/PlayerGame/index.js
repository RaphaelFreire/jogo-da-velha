import React from "react";
import playerX from "../../img/player-x.png";
import playerO from "../../img/player-o.png";
import "./styles.css";

const PlayerGame = ({ player }) => {
  const players = [];

  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player-game">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
};

export default PlayerGame;
