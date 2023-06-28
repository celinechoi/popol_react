import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "../routes/Home";
import Works from "../routes/Works";
import Info from "../routes/Info";
import Auth from "../routes/Auth";
import Header from "./Header";
import Home from "../routes/Home";

function AppRouter() {

	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/works">
					<Works />
				</Route>
				<Route path="/info">
					<Info />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default AppRouter;