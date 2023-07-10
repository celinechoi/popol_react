import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Works from "routes/Works";
import About from "routes/About";
import Auth from "routes/Auth";
import Header from "components/Header";
import Home from "routes/Home";
import List from "routes/List";
import Sub from "routes/Sub";

function AppRouter({ isLoggedIn }) {

	return (
		<Router>
			<Switch>
				{
					isLoggedIn ? (
						<>
							<Header />
							{/* <Route exact path="/works/solution">
								<Works />
							</Route> */}

							<Route exact path="/works/:typeId/:itemId">
								<Sub />
							</Route>

							<Route exact path="/works/:typeId">
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