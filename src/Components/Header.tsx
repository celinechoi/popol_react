import { motion } from "framer-motion";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { booleanState } from "../atoms";
import { authService } from "fbase";

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	align-items: center;		
	justify-content: center;
	padding: 20px 0 28px;
	border-bottom: 1px solid ${(props) => props.theme.bgColor.gray.fixth};
`;
const Row = styled.div`
	position: relative;
	width: 100%;
`;
const Logo = styled.div`
	color: ${(props) =>props.theme.point.lavender};
	font: 20px 'Righteous';
	text-align: center;
`;
const Em = styled.span`
	display: inline-block;
	padding-left: 16px;
	color: ${(props) => props.theme.point.purple};
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
const Items = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px 38px;
`;
const Item = styled.li`
	position: relative;
	color: ${(props) => props.theme.textColor.gray.second};
	font-size: 28px;
	font-weight: 700;
	line-height: 31px;
	a {
		&.on {
			color: ${props=>props.theme.point.yellow};
		}
	}
`;
const Point = styled(motion.span)`
	position: absolute;
  width: 16px;
  height: 5px;
  top: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
	border-radius: 7px;
  background-color: ${props=>props.theme.point.yellow};
`;


function Header(){
	// Theme 변경
	const [theme, setTheme] = useRecoilState(booleanState);
	const toggleTheme = () => {
		return (
			setTheme((prev) => !prev)
		);
	}
	// Link
	const homeMatch = useRouteMatch("/");
	const worksMatch = useRouteMatch("/works/solution");
	const aboutMatch = useRouteMatch("/about");
	// Log Out
	const history = useHistory();
	const onLogOutClick = () => {
		authService.signOut();
		history.push("/");
	}
	return (
		<Inner>
			<Row>
				<Logo>
					UI/UX Developer
					<Em>Jinseul</Em>
				</Logo>
				<ThemeBox onClick={toggleTheme}>
					<button><span className={`${theme ? "" : "left"}`}></span></button>
				</ThemeBox>
			</Row>
			<Row>
				<Items>
					<Item>
						<Link to="/" className={homeMatch?.isExact ? "on": ""}>
						Home
						{homeMatch?.isExact === true && <Point layoutId="point"/>}
						</Link>
					</Item>
					<Item>
						<Link to="/works/solution" className={worksMatch? "on": ""}>
						Works
						{worksMatch && <Point layoutId="point"/>}
						</Link>
					</Item>
					<Item>
						<Link to="/about" className={aboutMatch? "on": ""}>
						About
						{aboutMatch && <Point layoutId="point"/>}
						</Link>
					</Item>
				</Items>
			</Row>
			<button onClick={onLogOutClick}>Log Out</button>
		</Inner>
	);
}

export default Header;