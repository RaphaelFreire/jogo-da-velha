import React from "react";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AboutLink from "./objects/AboutLink";
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
		<About>
			<AboutLink />
		</About>
	</main>
);

export default App;
