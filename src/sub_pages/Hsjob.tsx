import styled from "styled-components";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import main from "img/sub_pages/hsjob/index.png";
import mainTm from "img/sub_pages/hsjob/index_tm.png";
import worknet from "img/sub_pages/hsjob/worknet.png";
import worknetTm from "img/sub_pages/hsjob/worknet_tm.png";
import jrounge from "img/sub_pages/hsjob/jrounge.png";
import jroungeV2 from "img/sub_pages/hsjob/jrounge_v2.png";

const PageFrame = styled(motion.div)`
  margin-top: 48px;
	padding: 0 0 100px;
  border-radius: 20px;
	background: linear-gradient(304deg, #3b1e87, #ffb72e);
`;

const Page = styled.div`
	.section {
		&-v2 {
			position: relative;
		}
	}
`;

const Spacing = styled.div`
	padding-top: 60px;
`;

const Title = styled.div`
	overflow: hidden;
	padding: 0 32px;
`;

const TitleH1 = styled(motion.div)`
	position: absolute;
	left: 32px;
	top: 0;
  color: rgba(255, 255, 255, 0.4);
	font-size: 32px;
  font-weight: 700;
	&.right {
		left: auto;
		right: 32px;
	}
`;

const Text = styled(motion.div)`
	position: relative;
	z-index: 0;
  margin-top: 120px;
	color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

const Content = styled.div`
	clear: both;
	padding: 20px 32px;
`;

const ContentTitle = styled.div`
	padding-bottom: 12px;
	font-size: 22px;
	font-weight: 700;
`;

const ScrollWindow = styled.div`
  overflow: hidden;
  position: relative;
  width: 750px;
  height: 420px;
  margin: 60px auto 0;
  border: 2px solid ${(props) => props.theme.bgColor.gray.first};
  border-radius: 18px;
`;

const Info = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  >svg {
    width: 32px;
    height: 32px;
    margin: 0 auto 8px;
  }
`;

const ScrollerMain = styled(motion.div)`
  display: block;
  width: 100%;
  height: 770px;
  background: rgba(255, 255, 255, 0.5);
  background: url(${main}) no-repeat center top / contain;
`;

const ImgBox = styled.div`
	>img {
		width: 100%;
	}
`;

const Circle = styled(motion.div)`
	width: 300px;
	height: 300px;
	border-radius: 50%;
	background-color: ${props => props.theme.bgColor.gray.fifth};
`;

const Boxes = styled(motion.ul)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 12px;
`;

const Box = styled(motion.li)`
	color: #333;
	font-size: 13px;
	font-weight: 500;
	.color {
		&-box {
			flex: 0 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			min-width: 60px;
			height: 60px;
			margin-bottom: 7px;
			padding: 0 10px;
			border-radius: 8px;
			color: #fff;
			font-size: 14px;
		}
	}
`;

// motion
const imgVariants = {
	start: {
		y: 0,
	},
	end: {
		y: -350,
		transition: {
			type: "tween",
			ease: [1, 1, 1, 1],
			stiffness: 10,
			delay: 0.5,
			repeat: Infinity,
			duration: 5,
		}
	},
	exit: {
		y: 0
	}
}

const dragVariants = {
	initial: {
		opacity: 1
	},
	animate: {
		opacity: 0,
		transition: {
			delay: 2,
			duration: 5
		}
	}
}

function Hsjob() {
	// const motionValue = useMotionValue(0);
	// // const transform = useTransform(y);
	// drag control
	const ScrollWindowInnerRef = useRef<HTMLDivElement>(null);
	// const SrcollerMainH = useRef<HTMLDivElement>(null).current?.offsetHeight;
	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
	const size = useTransform(scrollYProgress, [0, 0.2, 0.4], ["48px", "144px", "200px"]);
	const size2 = useTransform(scrollYProgress, [0, 0.4, 0.6], ["48px", "144px", "200px"]);
	useEffect(() => {
		scrollYProgress.onChange(() => {
			console.log(scrollYProgress.get());
		})
	}, []);


	return (
		<div className="sub">
			<PageFrame>
				<Page>
					<div className="section-v2">
						<Title>
							<TitleH1 style={{ fontSize: size, color: "#3b1e87", opacity }}>Color</TitleH1>
							<Text>
								직접 제작한 VSQUARE의 System Kit 아래 var_function.scss 안 $primary, $secondary 변수에 <br />해당 프로젝트 단계별 Primary와 Secondary Color를 각 변수에 담아 체계적인 퍼블리싱 작업을 하였습니다.
							</Text>
						</Title>
						<Content>
							<ContentTitle style={{ color: "#3b1e87" }}>Primary Color</ContentTitle>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#e1d2f9" }}>100</div>
									<span style={{ color: "#e1d2f9" }}>$primary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#c2a7f3" }}>200</div>
									<span style={{ color: "#c2a7f3" }}>$primary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#9674db" }}>300</div>
									<span style={{ color: "#9674db" }}>$primary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#6c4cb7" }}>400</div>
									<span style={{ color: "#6c4cb7" }}>$primary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#3b1e87" }}>primary color</div>
									<span style={{ color: "#3b1e87" }}>$primary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#2d1574" }}>600</div>
									<span style={{ color: "#2d1574" }}>$primary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#210f61" }}>700</div>
									<span style={{ color: "#210f61" }}>$primary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#16094e" }}>800</div>
									<span style={{ color: "#16094e" }}>$primary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#0f0540" }}>900</div>
									<span style={{ color: "#0f0540" }}>$primary--900</span>
								</Box>
							</Boxes>
						</Content>
						<Content>
							<ContentTitle style={{ color: "#ffb72e" }}>Secondary Color</ContentTitle>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#fff6d5" }}>100</div>
									<span style={{ color: "#fff6d5" }}>$secondary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffebab" }}>200</div>
									<span style={{ color: "#ffebab" }}>$secondary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffdc81" }}>300</div>
									<span style={{ color: "#ffdc81" }}>$secondary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffce62" }}>400</div>
									<span style={{ color: "#ffce62" }}>$secondary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffb72e" }}>secondary color</div>
									<span style={{ color: "#ffb72e" }}>$secondary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#db9421" }}>600</div>
									<span style={{ color: "#db9421" }}>$secondary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#b77517" }}>700</div>
									<span style={{ color: "#b77517" }}>$secondary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#93570e" }}>800</div>
									<span style={{ color: "#93570e" }}>$secondary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#7a4308" }}>900</div>
									<span style={{ color: "#7a4308" }}>$secondary--900</span>
								</Box>
							</Boxes>
						</Content>
					</div>
					<div className="section-v2">
						<Title>
							<TitleH1 style={{ fontSize: size2, opacity }} className="right"># Main</TitleH1>
							<Text>한신대학교 한신J-라운지는 ‘한신대학교 대학일자리사업단’의 기존 홈페이지의 콘텐츠를 바탕으로 <br />재학생,지역 청년, 기업에게 취업 관련 서비스를 보다 쉽고 간편하게 이용할 수 있도록 각각의 사용자 중심으로홈페이지 리뉴얼을 진행하였습니다. <br />기존 사이트에서 사용하던 푸른색은 제외하고 한신대학교의 아이덴티티 컬러인 보라색상을 중심으로 잡아 밝은 느낌의 색상들과 매치하여 트렌디한 느낌으로 탄생시켰습니다.</Text>
						</Title>
						<ScrollWindow ref={ScrollWindowInnerRef}>
							{/* <Info variants={dragVariants} initial="initial" animate="animate"> */}
							<Info style={{ opacity }}>
								<FontAwesomeIcon icon={faArrowsUpDown} />
								Drag
							</Info>
							<ScrollerMain variants={imgVariants} initial="start" animate="end" exit="exit" drag="y" dragConstraints={ScrollWindowInnerRef}></ScrollerMain>
						</ScrollWindow>
						<Spacing>
							<ImgBox>
								<img src={mainTm} alt="메인 테블릿 모바일" />
							</ImgBox>
						</Spacing>
					</div>
				</Page>
			</PageFrame>
		</div>
	);
}
export default Hsjob;