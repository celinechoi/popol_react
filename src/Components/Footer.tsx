import styled from "styled-components";
import github from "img/sns/github.svg";
import tistory from "img/sns/tistory.svg";
import { media } from "style/media_query";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

const FooterBox = styled.div<{ theme: boolean }>`
	padding: 24px 20px;
	border-top: 1px solid ${(props) => props.theme.borColor.gray.first};
	color: ${(props) => props.theme.bgColor.gray.fifth};
	text-align: center;
	&.home {
		background-color: ${(props) => props.theme.bgColor.gray.first};
	}
	p {
		color: ${(props) => props.theme.textColor.gray.fifth};
		font-size: 13px;
	}
`;

const SnsList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	margin-bottom: 12px;
	${media.micro`
		flex-direction: column;
	`};
`;

const Sns = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	text-transform: uppercase;
	cursor: pointer;
	&:first-child {
		background-color: #000;
	}
	&:nth-child(2) {
		background-color: #FF5A4A;
	}
`;

function Footer() {
	// Link
	// const homeLocation = useLocation();
	// console.log(homeLocation);
	return (
		<FooterBox>
			<div className="inner">
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