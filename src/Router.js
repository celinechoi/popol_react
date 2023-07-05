import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Works from "./routes/Works";
import About from "./routes/About";
import Auth from "./routes/Auth";
import Header from "./components/Header";
import Home from "./routes/Home";
import List from "./routes/List";

function AppRouter({ isLoggedIn }) {

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
							<Route path="/works/:typeId">
								<List />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route exact path="/">
								<Home />
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