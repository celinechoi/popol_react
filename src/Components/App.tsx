import { booleanState } from "../atoms";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "../theme";
import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
	transition: all 0.2s ease-in;
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
`;

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(()=> {
		authService.onAuthStateChanged((user) => {
			if(user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);
	const themeSate = useRecoilValue(booleanState);
	return (
		<ThemeProvider theme={themeSate ? darkTheme : lightTheme}>
			<GlobalStyle />
			{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing ..."}
			<footer>
				&copy; Jinseul Choi {new Date().getFullYear()}
			</footer>
		</ThemeProvider>
	);
}

export default App;