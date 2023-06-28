import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "../routes/Intro";
import Works from "../routes/Works";
import Info from "../routes/Info";
import Auth from "../routes/Auth";
import Header from "./Header";
import Home from "../routes/Home";

function AppRouter({ isLoggedIn }) {
	return (
		<Router>
			<Switch>
				{isLoggedIn ? (
					<>
						<Route exact path="/">
							<Home />
						</Route>
					</>
				) : (
					<Route exact path="/">
						<Auth />
					</Route>
				)}
				<Header />
				<Route path="/works">
					<Works />
				</Route>
				<Route path="/info">
					<Info />
				</Route>
				<Route exact path="/">
					<Intro />
				</Route>
			</Switch>
		</Router>
	);
}

export default AppRouter;