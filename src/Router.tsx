import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "routes/About";
import Auth from "routes/Auth";
import Header from "components/Header";
import Home from "routes/Home";
import List from "routes/List";
import Sub from "routes/Sub";
import Footer from "components/Footer";
import Top from "components/Top";
import ErrorPage from "components/ErrorPage";

function AppRouter() {

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Header />
			<Switch>
				<Route exact path="/works/:typeId/:itemId">
					<Sub />
				</Route>
				<Route exact path="/works/:typeId">
					<List />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/auth">
					<Auth />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path={"*"}>
					<ErrorPage />
				</Route>
			</Switch>
			<Top />
			<Footer />
		</Router>
	);
}

export default AppRouter;