import React, { useState } from "react";
import "./App.css";

import InputCheckbox from "./objects/InputCheckbox";
import HistoryGame from "./components/HistoryGame";
import LayerDark from "./objects/LayerDark";
import HeaderInternal from "./components/HeaderInternal";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HastagGame";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const [history, setHistory] = useState([]);

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  const addHistory = player => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  };

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame callback={addHistory} />
      <InputCheckbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />

      <HistoryGame history={history} />

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
