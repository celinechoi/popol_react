import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Info from "./Routes/Info";
import Works from "./Routes/Works";
import Header from "./Components/Header";
import Intro from "./Routes/Intro";
import { booleanState } from "./atoms";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Righteous&display=swap');
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
	const themeSate = useRecoilValue(booleanState);
	return (
		<ThemeProvider theme={themeSate ? darkTheme : lightTheme}>
			<GlobalStyle />
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
		</ThemeProvider>
	);
}

export default App;