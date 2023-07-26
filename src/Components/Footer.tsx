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