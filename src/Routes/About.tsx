import { authService } from "fbase";
import Auth from "./Auth";
import { useHistory } from "react-router-dom";

function About({init, isLoggedIn}: {init: boolean, isLoggedIn: boolean}){
	const history = useHistory();
	const onLogOutClick = () => {
		authService.signOut();
		history.push("/");
	}
	return (
		<>
			{
				init ? 
				(
					isLoggedIn ?
					(
						<>
							<p>About</p>
							<button onClick={onLogOutClick}>Log Out</button>
						</>
					):(
						<Auth />
					)
				):(
					"Initializing ..."
				)
			}
		</>
	);
}
export default About;