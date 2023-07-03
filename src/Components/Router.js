import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Works from "../routes/Works";
import About from "../routes/About";
import Auth from "../routes/Auth";
import Header from "./Header";
import Home from "../routes/Home";

function AppRouter({ isLoggedIn, userObj }) {

	return (
		<Router>
			<Switch>
				{
					isLoggedIn ? (
						<>
							<Header />
							<Route path="/works">
								<Works />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route exact path="/">
								<Home userObj={userObj} />
							</Route>
						</>
					) : (
						<>
							<Route exact path="/">
								<Auth />
							</Route>
						</>
					)
				}
			</Switch>
		</Router>
	);
}

export default AppRouter;