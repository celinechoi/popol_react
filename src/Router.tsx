import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "routes/About";
import Auth from "routes/Auth";
import Header from "components/Header";
import Home from "routes/Home";
import List from "routes/List";
import Sub from "routes/Sub";
import Footer from "components/Footer";
import Top from "components/Top";

function AppRouter({ isLoggedIn }: { isLoggedIn: boolean }) {

	return (
		<Router>
			<Header isLoggedIn={isLoggedIn} />
			<Switch>
				<Route exact path="/works/:typeId/:itemId">
					<Sub />
				</Route>
				<Route exact path="/works/:typeId">
					{isLoggedIn ? <List isLoggedIn={isLoggedIn} /> : <Auth />}
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route exact path="/auth">
					<Auth />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			<Top />
			<Footer />
		</Router>
	);
}

export default AppRouter;