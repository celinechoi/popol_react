import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Info from "./Routes/Info";
import Works from "./Routes/Works";
import Header from "./Components/Header";
import Intro from "./Routes/Intro";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/works">
					<Works />
				</Route>
				<Route path="/info">
					<Info />
				</Route>
				<Route path="/">
					<Intro />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;