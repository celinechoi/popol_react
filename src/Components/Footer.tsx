import { booleanState } from "atoms";
import { useRecoilState } from "recoil";
import { media } from "style/media_query";
import styled from "styled-components";
import github from "img/sns/github.svg";
import tistory from "img/sns/tistory.svg";

const FooterBox = styled.div<{ theme: boolean }>`
	padding: 16px 20px;
	border-top: 1px solid ${(props) => props.theme.borColor.gray.first};
	color: ${(props) => props.theme.bgColor.gray.fifth};
	text-align: center;
	p {
		color: ${(props) => props.theme.textColor.gray.second};;
		font-size: 13px;
	}
`;

const ThemeBox = styled.div`
	display: inline-block;
	position: relative;
	padding: 0 30px;
	margin-bottom: 16px;
	&::before,
	&::after {
		position: absolute;
		top: -2px;
		font-size: 18px;
	}
	&::before {
		content: '🌞';
		left: 0;
	}
	&::after {
		content: '🌙';
		right: 0;
	}
	${media.small`
		position: initial;
		left: auto;
		top: auto;
		transform: translateY(0);
	`};
	button {
		display: block;
		position: relative;
		background-color: ${(props) => props.theme.textColor.gray.second};
		border: 1px solid ${(props) => props.theme.textColor.gray.fifth};
		border-radius: 20px;
		width: 50px;
		height: 25px;
		cursor: pointer;
		>span {
			position: absolute;
			right: 3px;
			top: 2px;
			height: 18px;
			width: 18px;
			background-color: ${(props) => props.theme.bgColor.gray.second};
			border-radius: 50%;
			transition: all .3s cubic-bezier(0.48, 0.35, 1, 1);
			&.left {
				right: auto;
				left: 4px;
			}
		}
	}
`;

const SnsList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 11px;
	padding-bottom: 12px;
`;

const Sns = styled.li`
	font-size: 13px;
	text-transform: uppercase;
	cursor: pointer;
`;

function Footer() {
	// Theme 변경
	const [theme, setTheme] = useRecoilState(booleanState);
	const toggleTheme = () => {
		return (
			setTheme((prev) => !prev)
		);
	}
	return (
		<FooterBox>
			<div className="inner">
				<ThemeBox onClick={toggleTheme}>
					<button><span className={`${theme ? "" : "left"}`}></span></button>
				</ThemeBox>
				<SnsList>
					<Sns onClick={() => { window.open("https://github.com/celinechoi") }}>
						<img src={github} alt="github" />
					</Sns>
					<Sns onClick={() => { window.open("https://jintrue.tistory.com/") }}>
						<img src={tistory} alt="tistory" />
					</Sns>
				</SnsList>
				<p>&copy; Jinseul Choi {new Date().getFullYear()}</p>
			</div>
		</FooterBox>
	);
}
export default Footer;