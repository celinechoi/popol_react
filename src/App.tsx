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
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
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
  font-weight: 300;
  font-family: 'Noto Sans KR', 'Righteous';
  color:${(props) => props.theme.textColor.gray.third};
  line-height: 1.5;
  background-color: ${(props) => props.theme.bgColor.gray.second};
}
a {
  text-decoration:none;
  color:inherit;
}
.inner {
	max-width: 1400px;
	margin: 0 auto;
	${media.large`
		max-width: calc(100% - 40px);
	`};
}
.title {
	height: 200px;
	background-color: ${(props) => props.theme.point.blue[1]};
	h2 {
		padding-top: 50px;
		color: ${(props) => props.theme.textColor.gray.first};
		font-size: 44px;
		font-weight: 700;
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
		authService.onAuthStateChanged((user:any) => {
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
				{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing ..."}
				<Footer />
			</ThemeProvider>
		</ReactQueryFirestoreProvider>
	);
}

export default App;