import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { booleanState } from "../atoms";
import { authService } from "fbase";
import { media } from "style/media_query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const HeaderBox = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 3;
	width: 100%;
	height: 86px;
	background-color: ${(props) => props.theme.bgColor.gray.second};
	box-shadow: ${(props) => props.theme.shadow.under};
	${media.small`
		height: auto;
	`};
	.inner {
		display: flex;
		flex-direction: column;
		align-items: center;		
		justify-content: center;
		padding: 7px 0;
		${media.small`
			padding: 14px 0;
		`};
	}
`;
const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 38px;
	position: relative;
	width: 100%;
	${media.small`
		flex-direction: column;
    gap: 12px;
	`};
`;
const Logo = styled.div`
	a {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		color: ${(props) => props.theme.textColor.gray.third};
		font: 20px 'Righteous';
		text-align: center;
		${media.small`
			font-size: 16px;
		`};
	}
`;
const Em = styled.span`
	display: inline-block;
	margin-left: 35px;
	color: ${(props) => props.theme.textColor.gray.first};
	font-size: 38px;
	text-align: center;
	${media.small`
		margin-left: 0;
		font-size: 34px;
	`};
`;

const LogOut = styled.button`
  height: 37px;
	margin-left: auto;
  padding: 7px 20px;
  border-radius: 22px;
	border: 1px solid ${(props) => props.theme.bgColor.gray.fifth};
  background-color: ${(props) => props.theme.bgColor.gray.third};
	color: ${(props) => props.theme.textColor.gray.fifth};
	font-size: 13px;
	&:hover {
		background-color: ${(props) => props.theme.bgColor.gray.fifth};
	}
	.icon {
		&-out {
			display: none;
		}
	}
	${media.small`
		position: absolute;
    right: 0;
    top: 0;
		height: 30px;
		padding: 0;
		border-radius: 0;
		border: 0;
		background-color: transparent;
		&:hover {
			background-color: transparent;
		}
		span {
			display: none;
		}
		.icon {
			&-out {
				display: block;
				font-size: 20px;
			}
		}
	`};
`;
const Menus = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
	${media.small`
		gap: 12px 32px;
	`};
`;
const Menu = styled.li`
	position: relative;
	color: ${(props) => props.theme.textColor.gray.second};
	font-size: 18px;
	font-weight: 700;
	line-height: 31px;
	${media.small`
		font-size: 19px;
	`};
	&:hover {
		a {
			color: ${props => props.theme.point.yellow};
		}
	}
	a {
    display: block;
		&.on {
			color: ${props => props.theme.point.yellow};
		}
	}
`;
const Point = styled(motion.span)`
	position: absolute;
  display: block;
  width: 10px;
  height: 5px;
  bottom: 28px;
  left: 0;
  right: 0;
  margin: 0 auto;
	border-radius: 7px;
  background-color: ${props => props.theme.point.yellow};
	transition: all .3s cubic-bezier(0.48, 0.35, 1, 1);
	${media.small`
		width: 8px;
	`};
`;


function Header() {
	// Link
	const homeMatch = useRouteMatch("/");
	const worksMatch = useRouteMatch("/works");
	const subMatch = useRouteMatch("/sub");
	const aboutMatch = useRouteMatch("/about");
	// Log Out
	const history = useHistory();
	const onLogOutClick = () => {
		authService.signOut();
		history.push("/");
	}
	// state
	const [clicked, setClicked] = useState(false);
	const toggleClicked = () => setClicked((prev) => !prev);
	return (
		<HeaderBox>
			<div className="inner">
				<Row>
					<Logo>
						<Link to="/" className={homeMatch?.isExact ? "on" : ""}>
							<p>UI/UX Developer</p>
							<Em>Jinseul</Em>
						</Link>
					</Logo>
					<Menus>
						<Menu>
							<Link to="/" className={homeMatch?.isExact ? "on" : ""}>
								Home
								{homeMatch?.isExact === true && <Point layoutId="point" />}
							</Link>
						</Menu>
						<Menu>
							<Link to="/works/solution" className={worksMatch || subMatch ? "on" : ""}>
								Works
								{worksMatch || subMatch ? <Point layoutId="point" /> : ""}
							</Link>
						</Menu>
						<Menu>
							<Link to="/about" className={aboutMatch ? "on" : ""}>
								About
								{aboutMatch && <Point layoutId="point" />}
							</Link>
						</Menu>
					</Menus>
					<LogOut onClick={onLogOutClick}>
						<span>로그아웃</span>
						<FontAwesomeIcon icon={faArrowRightFromBracket} className="icon-out" />
					</LogOut>
				</Row>
			</div>
		</HeaderBox>
	);
}

export default Header;