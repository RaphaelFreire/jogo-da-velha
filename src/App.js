import React, { useState } from "react";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import HeaderInternal from "./components/HeaderInternal";
import Header from "./components/Header";
import Hashtag from "./components/Hastag";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main className="app">
      <Header onClick={handleClickAdd} />
      <Hashtag />
      <Checkbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />
      <About className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove}/>
        <ProfileUser />
      </About>
    </main>
  );
};

export default App;
