import { authService } from "fbase";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { media } from "style/media_query";
import styled, { keyframes } from "styled-components";

// keyframes
const blinkKey = keyframes`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 0;
	}
`;

const AuthFrame = styled.div`
  &.container {
		min-height: 620px;
  ${media.large`
    min-height: 560px;
  `};
  }
`;

const PageFrame = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	margin: 0 auto;
	${media.smallToo`
		width: calc(100% - 40px);
	`};
`;

const Info = styled.div`
	padding-bottom: 24px;
	color: ${props => props.theme.textColor.gray.first};
	font-size: 19px;
	font-weight: 900;
	text-align: center;
	${media.smallToo`
		font-size: 18px;
	`};
	${media.micro`
		font-size: 16px;
	`};
`;

const InfoSub = styled.p`
  color: ${props => props.theme.textColor.gray.first};
  font-size: 16px;
  .point {
    color: ${props => props.theme.neon.yellow};
  }`;

const AuthPage = styled.div`
	overflow: hidden;
	background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
	border-radius: 22px;
	transition: all .3s;
	width: 460px;
	margin: 0 auto;
	&:hover {
		box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
	}
	${media.smallToo`
		width: 100%;
	`};
`;

const Inner = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 0;
	transition: all .2s;
	border-radius: 20px;
	overflow: hidden;
	&:hover {
		transform: scale(0.98);
	}
`;

const FormFrame = styled.div`
	padding: 32px 24px;
	height: 100%;
	background-color: ${props => props.theme.bgColor.gray.first};
	${media.small`
		padding: 12px;
	`};
	&.login {
		form {
			border-top-right-radius: 12px;
			background-color: rgb(0, 255, 200);
			border-color: rgb(0, 255, 200);
		}
	}
	&.create {
		form {
			border-top-left-radius: 12px;
			background-color: rgb(255, 242, 66);
			border-color: rgb(255, 242, 66);
		}
	}
	.error {
		&-txt {
			padding-bottom: 24px;
			color: ${props => props.theme.point.red};
			text-align: center;
			font-weight: 900;
			animation: ${blinkKey} 3s step-end infinite;
		}
	}
`;

const Lists = styled.ul`
	display: flex;
	align-items: center;
	gap: 32px;
	position: relative;
	top: 2px;
	width: 100%;
	${media.small`
		gap: 28px;
	`};
`;

const List = styled.li`
	flex: 0 0 calc(100%/2 - 32px/2*1);
	padding: 12px 12px 16px;
	border-top-right-radius: 12px;
	border-top-left-radius: 12px;
	border-top: 1px solid transparent;
	border-right: 1px solid transparent;
	border-left: 1px solid transparent;
	color: ${props => props.theme.textColor.gray.third};
	font-size: 16px;
	font-weight: 700;
	text-align: center;
	cursor: pointer;
	&:first-child {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			right: -18px;
			top: 11px;
			width: 3px;
			height: 40%;
			border-radius: 3px;
			background-color: ${props => props.theme.textColor.gray.second};
			${media.small`
				right: -16px;
			`};
		}
	}
	&.login,
	&.create {
		background-color: ${props => props.theme.bgColor.gray.second};
		color: #000;
	}
	&.login {
		background-color: rgb(0, 255, 200);
		border-color: rgb(0, 255, 200);
	}
	&.create {
		background-color:rgb(255, 242, 66);
		border-color: rgb(255, 242, 66);
	}
	${media.small`
		flex-basis: calc(100%/2 - 28px/2*1);
		padding: 9px 8px 12px;
    font-size: 15px;
	`};
`;

const Form = styled.form`
width: 100%;
margin: 0 auto;
padding: 32px 20px;
border: 1px solid transparent;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
${media.small`
	padding: 16px 12px;
`};
	ul {
		display: flex;
		flex-direction: column;
		gap: 12px;
		>li {
			div {
				border-radius: 20px;
				padding: 8px;
				border: none;
				outline: none;
				color: white;
				background-color: ${props => props.theme.bgColor.gray.second};
				box-shadow: inset 2px 5px 10px ${props => props.theme.shadow.under2};
			}
		}
	}
	input[type="text"],
	input[type="password"] {
		background: none;
		border: none;
		outline: none;
		width: 100%;
		color: rgb(0, 255, 200);
		${media.small`
			padding: 8px 12px;
		`};
	}
`;

const Submit = styled.input`
	display: block;
	margin-top: 10px;
	width: 100%;
	border-radius: 12px;
	padding: 16px 24px;
	transition: .4s ease-in-out;
	background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
	color: #fff;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	&:hover {
		background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
		color: rgb(0, 255, 200);
	}
	&.create {
		background-image: ${props => props.theme.gradient.second};
		&:hover {
			background-image: linear-gradient(1630deg, rgba(160, 16, 100, 0.925) 0%, rgb(85, 48, 0) 100%);
			color: rgb(255, 242, 66);
		}
	}
	${media.small`
		padding: 12px 20px;
		font-size: 15px;
	`};
`;

const LoginHow = styled.ul`
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
	margin-top: 28px;
	padding-top: 20px;
	border-top: 1px solid ${props => props.theme.borColor.gray.first};
	${media.small`
		flex-direction: column;
	`};
	>li {
		flex: 0 0 calc(100%/2 - 12px/2*1);
		${media.small`
			flex-basis: 100%;
			width: 100%;
		`};
	}
	button {
		display: block;
		position: relative;
		z-index: 0;
		width: 100%;
		padding: 12px 20px;
		background-color: ${props => props.theme.bgColor.gray.fifth};
		color: #fff;
		${media.small`
			padding: 12px 8px;
			font-size: 13px;
		`};
		&[name="google"] {
			background-color: ${props => props.theme.point.green};
			&::before {
				content: "";
				background-color: #cdffeb;
				width: 0;
				height: 100%;
				border-bottom-left-radius: 6px;
				border-bottom-right-radius: 6px;
				position: absolute;
				bottom: -1px;
				left: 0;
				width: 100%;
				height: 5px;
				z-index: -1;
				transition: height 700ms ease-in-out;
				display: inline-block;
			}
			&:hover {
				color: ${props => props.theme.point.green};
				&::before {
					bottom: 0;
					height: 100%;
					border-radius: 6px;
				}
			}
		}
		&[name="github"] {
			background-color: ${props => props.theme.point.purple};
			&::before {
				content: "";
				background-color: #d6c5f0;
				width: 0;
				height: 100%;
				border-bottom-left-radius: 6px;
				border-bottom-right-radius: 6px;
				position: absolute;
				bottom: -1px;
				left: 0;
				width: 100%;
				height: 5px;
				z-index: -1;
				transition: height 700ms ease-in-out;
				display: inline-block;
			}
			&:hover {
				color: ${props => props.theme.point.purple};
				&::before {
					bottom: 0;
					height: 100%;
					border-radius: 6px;
				}
			}
		}
	}
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
			alert("이메일은 @형식으로, 비밀번호는 6자리 이상으로 해주세요. (" + error + ")");
		}
	}
	const history = useHistory();
	const toggleAccount = () => {
		setNewAccount(prev => !prev);
		history.push("/works/solution");
	}
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
			<AuthFrame className="container">
				<PageFrame>
					<Info>
						원활한 사이트 이용을 위해 <br className="mo-show" />로그인을 해주세요.
						<InfoSub>임시 <span className="point">계정 생성</span>을 해도 이용 가능합니다. <br />
							<span className="point">(이메일: @형식으로 | 비밀번호: 6자리 이상으로)</span></InfoSub>
					</Info>
					<AuthPage>
						<Inner>
							<FormFrame className={newAccount ? "create" : "login"}>
								{error ? (<p className="error-txt">{error}</p>) : ("")}
								<Lists>
									<List onClick={toggleAccount} className={newAccount ? "" : "login"}>로그인</List>
									<List onClick={toggleAccount} className={newAccount ? "create" : ""}>계정 생성</List>
								</Lists>
								<Form onSubmit={onSubmit}>
									<ul>
										<li><div><input name="email" type="text" placeholder="sample@test.com" required value={email} onChange={onChange} /></div></li>
										<li><div><input name="password" type="password" placeholder="6자리 이상의 비밀번호" required value={password} onChange={onChange} /></div></li>
										<li>
											{newAccount ?
												<Submit type="submit" className="create" value="Create Account" /> :
												<Submit type="submit" className="login" value="Sign In" />
											}
										</li>
									</ul>
								</Form>
								<LoginHow>
									<li><button name="google" onClick={onSocialClick}>Google로 로그인</button></li>
									<li><button name="github" onClick={onSocialClick}>Github로 로그인</button></li>
								</LoginHow>
							</FormFrame>
						</Inner>
					</AuthPage>
				</PageFrame>
			</AuthFrame>
		</>
	);
}
export default Auth;