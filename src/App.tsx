import * as firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { ReactQueryFirestoreProvider } from 'react-query-firestore';
import { authService, dbService } from "fbase";
import { booleanState } from "./atoms";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme";
import AppRouter from "Router";
import { useEffect, useState } from "react";
import { media } from "style/media_query";
import Footer from "components/Footer";
import Initializing from 'components/Initializing';
import Top from 'components/Top';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
	transition: all .1s ease;
}
body {
	background-color: ${(props) => props.theme.bgColor.gray.second};
	color:${(props) => props.theme.textColor.gray.second};
	font: 14px 'Noto Sans KR', 'Righteous';
  font-weight: 300;
  line-height: 1.5;
	&.no {
		&-scroll {
			overflow: hidden!important;
			touch-action: none!important;
			-webkit-overflow-scrolling: none!important;
			overscroll-behavior: none!important
		}
	}
}
a {
  text-decoration:none;
  color:inherit;
}
button,
input,
textarea,
select {
	border: 0;
	border-radius: 6px;
	box-sizing: border-box;
	font: 14px 'Noto Sans KR', 'Righteous';
}
input,
textarea,
select {
	padding: 14px 20px;
	border: ${(props) => props.theme.bgColor.gray.fifth};
}
button {
	cursor: pointer;
	font-weight: 700;
}
.inner {
	max-width: 1400px;
	margin: 0 auto;
	${media.large`
		max-width: calc(100% - 48px);
	`};
	${media.small`
		max-width: calc(100% - 40px);
	`};
}
.page {
	&-h1 {
		color: ${(props) => props.theme.textColor.gray.first};
		font-size: 44px;
		font-weight: 700;
		${media.medium`
			font-size: 34px;
		`};
		${media.small`
			font-size: 30px;
		`};
		${media.micro`
			font-size: 26px;
		`};
	}
	&-h2 {
		font-size: 32px;
		font-weight: 700;
		${media.medium`
			font-size: 28px;
		`};
		${media.small`
			font-size: 24px;
		`};
		${media.micro`
			font-size: 20px;
		`};
	}
	&-h3 {
		font-size: 24px;
		font-weight: 700;
		${media.medium`
			font-size: 20px;
		`};
		${media.small`
			font-size: 18px;
		`};
		${media.micro`
			font-size: 16px;
		`};
	}
}
.section {
	padding-top: 80px;
	${media.large`
		padding-top: 60px;
	`};
	&-v2 {
		padding-top: 60px;
		${media.large`
			padding-top: 40px;
		`};
	}
	&-title {
		padding-bottom: 48px;
		font-size: 28px;
		font-weight: 700;
		${media.medium`
			padding-bottom: 40px;
			font-size: 24px;
		`};
		${media.small`
			font-size: 20px;
		`};
	}
}
.txt {
	&-default {
		font-size: 16px;
		${media.medium`
			font-size: 14px;
		`};
	}
}
/* common sub style */
.sub {
	${media.large` padding-top: 32px; `};
	${media.large` padding-top: 24px; `};
	&-view {
		.txt {
			&-default {
				padding-top: 16px;
				${media.medium`
					padding-top: 14px;
				`};
			}
		}
		&-title {
			padding-bottom: 32px;
			${media.medium`
				padding-bottom: 28px;
			`};
			${media.small`
				padding-bottom: 24px;
			`};
		}
	}
	.grids {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		gap: 12px;
		${media.small`
			flex-direction: column;
		`};
	}
}

`;

// react-query-firestore
const reactQueryConfig = {
	queries: {
		retry: false
	}
}

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState({});
	useEffect(() => {
		authService.onAuthStateChanged((user: any) => {
			if (user) {
				setIsLoggedIn(true);
				console.log(user);
				setUserObj(user);
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);
	const themeSate = useRecoilValue(booleanState);
	return (
		<ReactQueryFirestoreProvider firestore={dbService} reactQueryConfig={reactQueryConfig}>
			<ThemeProvider theme={themeSate ? darkTheme : lightTheme}>
				<GlobalStyle />
				{init ? <AppRouter isLoggedIn={isLoggedIn} /> : <Initializing />}
				<Top />
				<Footer />
			</ThemeProvider>
		</ReactQueryFirestoreProvider>
	);
}

export default App;