import styled, { keyframes } from "styled-components";
import useCountUp from "function/CountUp"
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
const animate_4010 = keyframes`
  0%,100% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(20px);
  }
`;

const HomeFrame = styled.div`
	position: relative;
	z-index: 0;
  /* min-height: 580px; */
  height: calc(var(--vh, 1vh)*100);
	padding: 160px 0 80px;
	background-color: ${(props) => props.theme.bgColor.gray.first};
	${media.small`
		padding-top: 167px;
	`};
`;

const BubbleBg = styled.div`
  position: absolute;
  right: 10%;
  top: 30%;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: inset 0 0 25px rgba (255, 255, 255, 0.25);
  animation: ${animate_4010} 8s ease-in-out infinite;
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
  }
  &:nth-child(2) {
    zoom: 0.45;
    right: auto;
    left: 13%;
    top: 5%;
    animation-delay: -4s;
  }
  &:nth-child(3) {
    zoom: 0.45;
    right: auto;
    left: 29%;
    top: 20%;
    animation-delay: -6s;
  }
  &:nth-child(4) {
    zoom: 0.15;
    right: 30%;
    top: 31%;
    animation-delay: -3s;
  }
  &:nth-child(5) {
    zoom: 0.5;
    left: 15%;
    top: auto;
    bottom: 7%;
    animation-delay: -5s;
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
  padding: 32px;
	>img {
		display: block;
		width: 190px;
		${media.medium`
			width: 23%;
		`};
	}
`;

const Txt = styled(motion.div)`
  font-size: 28px;
  font-weight: 900;
  text-align: center;
  ${media.medium`
    font-size: 24px;
  `};
  .point {
    background-image: ${props => props.theme.gradient.second};
    background-clip: text;
    background-size: 100%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    color: transparent;
  }
`;


// motion
const visualVariants = {
  hidden :{
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
			<Draw width="1122" height="951" viewBox="0 0 1122 951" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(.366 .828)" stroke="rgba(228, 19, 141, 0.67)" fill="none" fillRule="evenodd">
					<ellipse className="draw-1" transform="rotate(-20 560.634 578.172)" cx="560.634" cy="578.172" rx="521.5" ry="204.5"></ellipse>
					<ellipse className="draw-2" transform="rotate(-20 560.634 371.172)" cx="560.634" cy="371.172" rx="521.5" ry="204.5"></ellipse>
				</g>
			</Draw>
      <Visual variants={visualVariants} initial="hidden" animate="visible">
				<img src={good_emoji} alt="good_emoji" />
				{/* <p><span>{useCountUp(17)}</span>개의 프로젝트</p>
				<p><span>{useCountUp(7)}</span>년차</p> */}
        <Txt variants={txtVariants} initial="hidden" animate="visible">안녕하세요. <br /><span className="point">UI/UX Developer 최진슬의 포트폴리오</span> 방문을 환영합니다.</Txt>
			</Visual>
		</HomeFrame>
	);
}
export default Home;