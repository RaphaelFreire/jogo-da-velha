import React, { useState } from "react";
import "./App.css";

import Input from "./objects/InputCheckbox";
import TagGame from "./objects/TagGame";
import LayerDark from "./objects/LayerDark";
import HeaderInternal from "./components/HeaderInternal";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HastagGame";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <Input id="show" value="show" type="checkbox" content="Mostrar eventos" />

      <TagGame content="Adicionou O" />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
