import { motion } from "framer-motion";
import { Link, useRouteMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { booleanState } from "../atoms";

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;		
	justify-content: center;
	padding: 12px 0;
	border-bottom: 1px solid ${(props) => props.theme.bgColor.gray.fixth};
`;
const Row = styled.div`
	position: relative;
	width: 100%;
`;
const Logo = styled.div`
	color: ${(props) =>props.theme.point.purple};
	font: 20px 'Righteous';
	text-align: center;
`;
const Em = styled.span`
	display: inline-block;
	padding-left: 16px;
	color: ${(props) => props.theme.point.beige};
	font-size: 38px;
	text-align: center;
`;
const ThemeBox = styled.div`
	position: absolute;
	right: 48px;
	top: 50%;
	transform: translateY(-50%);
	padding: 0 30px;
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
	button {
		display: block;
		position: relative;
		background-color: ${(props) => props.theme.textColor.gray.second};
		border: 1px solid ${(props) => props.theme.textColor.gray.fixth};
		border-radius: 20px;
		width: 50px;
		height: 25px;
		cursor: pointer;
		>span {
			position: absolute;
			right: 4px;
			top: 2px;
			height: 18px;
			width: 18px;
			background-color: ${(props) => props.theme.bgColor.gray.third};
			border-radius: 50%;
		}
	}
`;
const Items = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 36px;
`;
const Item = styled.li`
	position: relative;
	color: ${(props) => props.theme.point.lavender};
	font-size: 20px;
	font-weight: 700;
	line-height: 1.8;
`;
const Circle = styled(motion.span)`
	position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${props=>props.theme.point.beige};
`;

function Header(){
	const [theme, setTheme] = useRecoilState(booleanState);
	const toggleTheme = () => {
		console.log("click");
		return (
			setTheme((prev) => !prev)
		);
	}
	// Link
	const homeMatch = useRouteMatch("/");
	const worksMatch = useRouteMatch("/works");
	const infoMatch = useRouteMatch("/info");
	return (
		<Inner>
			<Row>
				<Logo>
					UI/UX Developer
					<Em>Jinseul</Em>
				</Logo>
				<ThemeBox onClick={toggleTheme}>
					<button><span></span></button>
				</ThemeBox>
			</Row>
			<Row>
				<Items>
					<Item>
						<Link to="/">
						Intro
						{homeMatch?.isExact === true && <Circle layoutId="circle"/>}
						</Link>
					</Item>
					<Item>
						<Link to="/works">
						Works
						{worksMatch && <Circle layoutId="circle"/>}
						</Link>
					</Item>
					<Item>
						<Link to="/info">
						Info
						{infoMatch && <Circle layoutId="circle"/>}
						</Link>
					</Item>
				</Items>
			</Row>
		</Inner>
	);
}

export default Header;