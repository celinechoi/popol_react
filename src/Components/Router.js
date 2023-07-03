import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Intro from "../routes/Home";
import Works from "../routes/Works";
import About from "../routes/About";
import Auth from "../routes/Auth";
import Header from "./Header";
import Home from "../routes/Home";

function AppRouter({ isLoggedIn, userObj }) {

	return (
		<Router>
			<Header />
			<Switch>
				{
					isLoggedIn ? (
						<>
							<Route path="/works">
								<Works />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/">
								<Home userObj={userObj} />
							</Route>
						</>
					) : (
						<>
							<Auth />
						</>
					)
				}
			</Switch>
		</Router>
	);
}

export default AppRouter;