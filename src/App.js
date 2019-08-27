import React from "react";
import "./App.css";

import Input from "./objects/Input";
import Checkbox from "./objects/Checkbox";
import Header from "./components/Header";
import Hashtag from "./components/Hastag";

const App = () => (
	<main className="app">
		<Header />
		<Hashtag />
		<Checkbox
			id="show"
			value="show"
			type="checkbox"
			content="Mostrar eventos"
		/>
	</main>
);

export default App;
