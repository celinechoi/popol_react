import { booleanState } from "./atoms";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme";
import AppRouter from "Router";
import { media } from "style/media_query";

const GlobalStyle = createGlobalStyle`
::selection {
	background-color: ${props => props.theme.point.pink};
	color: #000;
}
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
  overflow-x: hidden;
	background-color: ${(props) => props.theme.bgColor.gray.first};
	color:${(props) => props.theme.textColor.gray.second};
	font: 14px 'Noto Sans KR', 'Righteous';
  font-weight: 300;
  line-height: 1.5;
	cursor: default;
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
	background-color: ${props => props.theme.bgColor.gray.second};
	color: ${props => props.theme.textColor.gray.fourth};
	cursor: pointer;
	font-weight: 700;
	&:hover {
		background-color: ${props => props.theme.textColor.gray.second};
		color: ${props => props.theme.bgColor.gray.fourth};
	}
}
.dim {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	font-family: 'Righteous';
	font-weight: 500;
	text-align: center;
	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.4);
	}
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
.container {
	position: relative;
  min-height: 1080px;
	margin: 80px 0 0;
	padding: 54px;
	background-color: ${props => props.theme.bgColor.gray.second};
	${media.small`
		margin-top: 167px;
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
	${media.medium`
		padding-top: 40px;
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
/* show OR hide */
.lp {
	&-show {
		display: none;
		${media.large`
			display: block;
		`};
	}
	&-hide {
		${media.large`
			display: none;
		`};
	}
}
.tm {
	&-show {
		display: none;
		${media.medium`
			display: block;
		`};
	}
	&-hide {
		${media.medium`
			display: none;
		`};
	}
}
.ta {
	&-show {
		display: none;
		${media.medium`
			display: block;
		`};
		${media.small`
			display: none;
		`};
	}
	&-hide {
		${media.medium`
			display: none;
		`};
		${media.small`
			display: block;
		`};
	}
}
.mo {
	&-show {
		display: none;
		${media.small`
			display: block;
		`};
	}
	&-hide {
		${media.small`
			display: none;
		`};
	}
}
`;

function App() {
	const themeSate = useRecoilValue(booleanState);
	return (
		<ThemeProvider theme={themeSate ? darkTheme : lightTheme}>
			<GlobalStyle />
			<AppRouter />
		</ThemeProvider>
	);
}

export default App;