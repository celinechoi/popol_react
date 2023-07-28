import styled, { keyframes } from "styled-components";
import useCountUp from "function/CountUp"
import { media } from 'style/media_query';
import good_emoji from "img/emoji/good.png";
import { motion } from "framer-motion";

// keyframes
const dash2Key = keyframes`
	0% { stroke-dashoffset: -2392; }
	100% { stroke-dashoffset: 0; }
`;

const dash1Key = keyframes`
	0% { stroke-dashoffset: 2570; }
	100% { stroke-dashoffset: 0; }
`;

const HomeFrame = styled.div`
	position: relative;
	z-index: 0;
  min-height: 840px;
	padding: 140px 0 80px;
	background-color: ${(props) => props.theme.bgColor.gray.first};
	${media.small`
		padding-top: 167px;
	`};
`;

const Draw = styled.svg`
	position: absolute;
	left: 50%;
	top: 50%;
	z-index: -1;
	transform: translate(-50%, -50%);
	g {
		ellipse {
			stroke-dasharray: 2570;
			stroke-dashoffset: 2570;
		}
	}
	.draw {
		&-1 {
			stroke-dasharray: 2720;
			stroke-dashoffset: -2392;
			animation: ${dash2Key} 1s 1s forwards cubic-bezier(.7, 0, .3, 1);
		}
		&-2 {
			animation: ${dash1Key} 1s 1s forwards cubic-bezier(.7, 0, .3, 1);
		}
	}
`;

const Visual = styled(motion.div)`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	>img {
		display: block;
		width: 267px;
		${media.medium`
			width: 23%;
		`};
	}
	>p {
		font-size: 44px;
		font-weight: 900;
		${media.medium`
			font-size: 36px;
		`};
		span {
			color: ${(props) => props.theme.point.yellow};
		}
	}
`;

function Home() {
	return (
		<HomeFrame>
			<Draw width="1122" height="951" viewBox="0 0 1122 951" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(.366 .828)" stroke="rgba(175, 64, 255, 0.5)" fill="none" fill-rule="evenodd">
					<ellipse className="draw-1" transform="rotate(-20 560.634 578.172)" cx="560.634" cy="578.172" rx="521.5" ry="204.5"></ellipse>
					<ellipse className="draw-2" transform="rotate(-20 560.634 371.172)" cx="560.634" cy="371.172" rx="521.5" ry="204.5"></ellipse>
				</g>
			</Draw>
			<Visual>
				<img src={good_emoji} alt="good_emoji" />
				{/* <p><span>{useCountUp(17)}</span>개의 프로젝트</p>
				<p><span>{useCountUp(7)}</span>년차</p> */}
				<p>UI/UX 개발자 최진슬 입니다.</p>
			</Visual>
		</HomeFrame>
	);
}
export default Home;