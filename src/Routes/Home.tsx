import styled, { keyframes } from "styled-components";
import { media } from 'style/media_query';
import good_emoji from "img/emoji/good.png";
import { motion } from "framer-motion";

// keyframes
// drawing 
const dash2Key = keyframes`
	0% { stroke-dashoffset: -2392; }
	100% { stroke-dashoffset: 0; }
`;

const dash1Key = keyframes`
	0% { stroke-dashoffset: 2570; }
	100% { stroke-dashoffset: 0; }
`;

// bubble
const bubbleKey = keyframes`
  0%,100% {
    transform: translateY(-30px);
  }

  50% {
    transform: translateY(30px);
  }
`;

const HomeFrame = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 0;
	height: calc(var(--vh,1vh)*100 - 86px - 107px);
	background-color: ${(props) => props.theme.bgColor.gray.first};
	${media.small`
		height: calc(var(--vh,1vh)*100 - 90px - 107px);
	`};
	${media.horizontal`
		height: auto;
    min-height: calc(var(--vh,1vh)*100 - 145px - 102px);
	`};
`;

const BubbleBg = styled.div`
  position: absolute;
  right: 10%;
  top: 30%;
  z-index: -1;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: inset 0 0 25px rgba (255, 255, 255, 0.25);
  animation: ${bubbleKey} 8s ease-in-out infinite;
	${media.medium`
		top: 40%;
    width: 150px;
    height: 150px;
	`};
	${media.smallToo`
		width: 110px;
    height: 110px;
	`};
  &::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 45px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    filter: blur(2px);
		${media.smallToo`
			top: 35px;
			left: 30px;
			width: 18px;
			height: 18px;
		`};
  }
  ::after {
    content: '';
    position: absolute;
    top: 80px;
    left: 80px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    filter: blur(2px);
		${media.smallToo`
			top: 60px;
			left: 60px;
			width: 8px;
			height: 8px;
		`};
  }
  &:nth-child(2) {
    zoom: 0.45;
    right: auto;
    left: 13%;
    top: 5%;
    animation-delay: -4s;
		opacity: 0.9;
  }
  &:nth-child(3) {
    zoom: 0.3;
    right: auto;
    left: 29%;
    top: 20%;
    animation-delay: -6s;
		opacity: 0.7;
  }
  &:nth-child(4) {
    zoom: 0.15;
    right: 30%;
    top: 31%;
    animation-delay: -4s;
		opacity: 0.6;
  }
  &:nth-child(5) {
    zoom: 1.1;
		left: 6%;
    top: auto;
    bottom: 7%;
    animation-delay: -5s;
		opacity: 0.6;
  }
  &:nth-child(6) {
    zoom: 0.35;
    right: 5%;
    top: auto;
    bottom: 5%;
    animation-delay: -2s;
  }
  &:nth-child(7) {
    zoom: 0.25;
    right: 30%;
    top: auto;
    bottom: 23%;
    animation-delay: -6s;
  }
	&:nth-child(8) {
    zoom: 0.6;
		right: auto;
    left: 29%;
    top: 49%;
    animation-delay: -12s;
  }
  >span {
    position: absolute;
    border-radius: 50%;
    &:nth-child(1) {
      inset: 10px;
      border-left: 15px solid #0fb4ff;
      filter: blur(8px);
    }
    &:nth-child(2) {
      inset: 10px;
      border-right: 15px solid #ff4484;
      filter: blur(8px);
    }
    &:nth-child(3) {
      inset: 10px;
      border-top: 15px solid #ffeb3b;
      filter: blur(8px);
    }
    &:nth-child(4) {
      inset: 30px;
      border-left: 15px solid #ff4484;
      filter: blur(12px);
    }
    &:nth-child(5) {
      inset: 10px;
      border-bottom: 10px solid #fff;
      filter: blur(8px);
      transform: rotate(330deg);
    }
  }
`;

const Draw = styled.svg`
	position: absolute; 
	left: 0;
	top: 0;
	z-index: -1;
  width: 100%;
  height: 100%;
	/* @media (orientation: landscape) {
		scale: 2;
	} */
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
			animation: ${dash2Key} 1s 0s forwards cubic-bezier(.7, 0, .3, 1);
		}
		&-2 {
			animation: ${dash1Key} 1s 0s forwards cubic-bezier(.7, 0, .3, 1);
		}
	}
`;

const Visual = styled(motion.div)`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
  padding: 32px 20px;
	${media.small`
		padding: 12px;
	`};
	/* @media (orientation: landscape) {
		display: block;
		height: auto;
		margin-top: 145px;
	} */
	>img {
		display: block;
		width: 230px;
		margin: 0 auto;
		${media.medium`
			width: 25%;
		`};
		${media.small`
			width: 29%;
		`};
		${media.micro`
			width: 30%;
		`};
	}
`;

const Txt = styled(motion.div)`
  font-size: 28px;
  font-weight: 900;
  text-align: center;
  ${media.medium`
    font-size: 22px;
  `};
	${media.smallToo`
    font-size: 18px;
  `};
	${media.micro`
		font-size: 16px;
	`};
  .point {
    background-image: ${props => props.theme.gradient.second};
    background-clip: text;
    background-size: 100%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    color: transparent;
		font-weight: 900;
  }
`;


// motion
const visualVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1.2,
		}
	}
}

const txtVariants = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1.4,
		}
	}
}

function Home() {
	return (
		<HomeFrame>
			<BubbleBg><span></span><span></span><span></span><span></span><span></span></BubbleBg>
			<BubbleBg><span></span><span></span><span></span><span></span><span></span></BubbleBg>
			<BubbleBg><span></span><span></span><span></span><span></span><span></span></BubbleBg>
			<BubbleBg><span></span><span></span><span></span><span></span><span></span></BubbleBg>
			<BubbleBg><span></span><span></span><span></span><span></span><span></span></BubbleBg>
			<BubbleBg><span></span><span></span><span></span><span></span><span></span></BubbleBg>
			<BubbleBg><span></span><span></span><span></span><span></span><span></span></BubbleBg>
			<BubbleBg><span></span><span></span><span></span><span></span><span></span></BubbleBg>
			<Draw width="1122" height="951" viewBox="0 0 1122 951" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(.366 .828)" stroke="rgba(228, 19, 141, 0.67)" fill="none" fillRule="evenodd">
					<ellipse className="draw-1" transform="rotate(-20 560.634 578.172)" cx="560.634" cy="578.172" rx="521.5" ry="204.5"></ellipse>
					<ellipse className="draw-2" transform="rotate(-20 560.634 371.172)" cx="560.634" cy="371.172" rx="521.5" ry="204.5"></ellipse>
				</g>
			</Draw>
			<Visual variants={visualVariants} initial="hidden" animate="visible">
				<img src={good_emoji} alt="good_emoji" />
				<Txt variants={txtVariants} initial="hidden" animate="visible">안녕하세요. <br /><span className="point">UI/UX Developer 최진슬 포트폴리오</span> <br />방문을 환영합니다.</Txt>
			</Visual>
		</HomeFrame>
	);
}
export default Home;