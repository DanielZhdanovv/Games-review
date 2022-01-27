import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GamesIndexPage from "./games/GamesIndexPage";
import GamesShow from "./games/GamesShow";
import UserHomePage from "./games/UserHomePage";
export const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={GamesIndexPage} />
				<Route exact path='/games' component={GamesIndexPage} />
				<Route exact path='/games/:id' component={GamesShow} />
				<Route exact path='/user/:id' component={UserHomePage} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
