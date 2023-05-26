import { motion } from "framer-motion";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Inner = styled.div`
	display: flex;
	gap: 16px 52px;
	align-items: flex-end;		
	justify-content: center;
	padding: 12px;
	box-shadow: 0 1px 2px ${(props) => props.theme.black.lighter};
`;
const Logo = styled.div`
	font: 20px 'Righteous';
	text-align: center;
`;
const Em = styled.span`
	display: inline-block;
	padding-left: 16px;
	font-size: 38px;
	text-align: center;
`;
const Items = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;
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
  top: -4px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${props=>props.theme.point.beige};
`;

function Header(){
	const homeMatch = useRouteMatch("/");
	const worksMatch = useRouteMatch("/works");
	const infoMatch = useRouteMatch("/info");
	return (
		<Inner>
			<Logo>
				UI/UX Developer
				<Em>Jinseul</Em>
			</Logo>
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
		</Inner>
	);
}

export default Header;