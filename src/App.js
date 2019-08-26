import React from "react";
import "./App.css";

import Input from "./objects/Input";
import Label from "./objects/Label";
import Header from "./components/Header";
import Hashtag from "./components/Hastag";

const App = () => (
	<main className="app">
		<Header />
		<Hashtag />
		<Input value="show" />
		<Label content="Mostar eventos" />
	</main>
);

export default App;
