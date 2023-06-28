import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { authService } from "fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Intro from "../routes/Home";
import Works from "../routes/Works";
import About from "../routes/About";
import Auth from "../routes/Auth";
import Header from "./Header";
import Home from "../routes/Home";

function AppRouter() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/works">
					<Works init={init} isLoggedIn={isLoggedIn} />
				</Route>
				<Route path="/about">
					<About init={init} isLoggedIn={isLoggedIn} />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default AppRouter;