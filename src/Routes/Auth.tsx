import { authService } from "fbase";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";

const AuthPage = styled.div`
	text-align: center;
`;

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(true);
	const [error, setError] = useState("");
	const onChange = (event: any) => {
		// console.log(event.target.name);
		const { target: { name, value } } = event;
		if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		}
	}
	const onSubmit = async (event: any) => {
		event.preventDefault();
		try {
			let data;
			if (newAccount) {
				// create account
				data = await createUserWithEmailAndPassword(authService, email, password);
			} else {
				// login
				data = await signInWithEmailAndPassword(authService, email, password);
			}
			// console.log(data);
		} catch (error: any) {
			setError(error.message);
		}
	}
	const toggleAccount = () => setNewAccount(prev => !prev);
	const onSocialClick = async (event: any) => {
		const { target: { name } } = event;
		let provider: any;
		if (name === "google") {
			provider = new GoogleAuthProvider();
		} else if (name === "github") {
			provider = new GithubAuthProvider();
		}
		const data = await signInWithPopup(authService, provider);
		// console.log(data);
	};
	return (
		<>
			<AuthPage>
				<div className="container">
					<form onSubmit={onSubmit}>
						<input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
						<input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
						<input type="submit" value={newAccount ? "Create Account" : "Sign In"} />
						{error}
					</form>
					<span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
					<div>
						<button name="google" onClick={onSocialClick}>Continue with Google</button>
						<button name="github" onClick={onSocialClick}>Continue with Github</button>
					</div>
				</div>
			</AuthPage>
		</>
	);
}
export default Auth;