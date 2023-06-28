import Auth from "./Auth";

function About({init, isLoggedIn}: {init: boolean, isLoggedIn: boolean}){
	return (
		<>
			{
				init ? 
				(
					isLoggedIn ?
					(
						<>
							<p>About</p>
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