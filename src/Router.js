import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Works from "Routes/Works";
import About from "Routes/About";
import Auth from "Routes/Auth";
import Header from "Components/Header";
import Home from "Routes/Home";
import List from "Routes/List";
import Sub from "Routes/Sub";

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