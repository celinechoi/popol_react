import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import * as firebase from 'firebase/compat/app';
import { ReactQueryFirestoreProvider } from 'react-query-firestore';
import { authService, dbService } from "fbase";
import Works from "routes/Works";
import About from "routes/About";
import Auth from "routes/Auth";
import Header from "components/Header";
import Home from "routes/Home";
import List from "routes/List";
import Sub from "routes/Sub";
import Initializing from 'components/Initializing';

function AppRouter() {
	return (
		<Router>
			<Header />
			<Switch>

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

			</Switch>
		</Router>
	);
}

export default AppRouter;