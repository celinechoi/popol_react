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

function AppRouter({ isLoggedIn }: { isLoggedIn: boolean }) {

	return (
		<Router>
			<Header isLoggedIn={isLoggedIn} />
			<Switch>
				<Route exact path="/popol_react/works/:typeId/:itemId">
					{isLoggedIn ? <Sub isLoggedIn={isLoggedIn} /> : <Auth />}
				</Route>
				<Route exact path="/popol_react/works/:typeId">
					{isLoggedIn ? <List isLoggedIn={isLoggedIn} /> : <Auth />}
				</Route>
				<Route exact path="/popol_react/about">
					<About />
				</Route>
				<Route exact path="/popol_react/auth">
					<Auth />
				</Route>
				<Route exact path="/popol_react">
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