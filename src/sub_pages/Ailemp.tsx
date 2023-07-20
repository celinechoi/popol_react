import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { media } from "style/media_query";
import main from "img/sub_pages/ailemp/index.png";
import mainTa from "img/sub_pages/ailemp/index_ta.png";
import voucherSelect from "img/sub_pages/ailemp/voucher_select.png";
import clipIcon from "img/sub_pages/ailemp/clip_icon.png";
import mainBg from "img/sub_pages/ailemp/index_bg.png";
import learnerSmart from "img/sub_pages/ailemp/learner_smart.png";
import learnerSmartTa from "img/sub_pages/ailemp/learner_smart_ta.png";
import learnerSmartMo from "img/sub_pages/ailemp/learner_smart_mo.png";
import masterDashboard from "img/sub_pages/ailemp/master_dashboard.png";
import masterDashboardMo from "img/sub_pages/ailemp/master_dashboard_mo.png";
import application from "img/sub_pages/ailemp/application.png";
import faq from "img/sub_pages/ailemp/faq.png";
import join2 from "img/sub_pages/ailemp/join2.png";
import join6 from "img/sub_pages/ailemp/join6.png";

const PageFrame = styled(motion.div)`
  margin-top: 48px;
	padding: 0 0 100px;
  border-radius: 20px;
	background: linear-gradient(90deg, #00495a, #5eebb5, #00c3ed);
	.txt {
		&-normal {
			color: #333;
			font-size: 18px;
			font-weight: 500;
			line-height: 1.9;
		}
	}
	.point {
		display: inline-block;
		position: relative;
		color: #fff;
		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: -1;
			width: 100%;
			height: 30px;
			background-color: rgba(255, 84, 58, 0.8);
			transform: skewX(-22deg);
		}
	}
`;

const Page = styled.div`
	padding-top: 60px;
	${media.medium`
		padding-top: 0;
	`};
	.section {
		position: relative;
		${media.medium`
			padding-top: 100px;
		`};
		&.main {
			margin-top: 150px;
    	padding: 170px 0 350px;
			background-color: rgba(255, 255, 255, 0.4);
			${media.medium`
				padding: 60px 0;
			`};
			/* &::after {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: url(${mainBg}) no-repeat center top / auto 500px;
				opacity: 0.6;
			} */
			.right {
				top: 35px;
				${media.medium`
					top: 25px;
				`};
			}
		}
	}
	.icon {
		&-shortcuts {
			position: absolute;
			right: 24px;
			top: 24px;
			z-index: 1;
			padding: 15px;
			background-color: ${props => props.theme.point.green};
			border-radius: 50%;
			opacity: 0.6;
			cursor: pointer;
			&:hover {
				background-color: #000;
			}
			${media.small`
				padding: 12px;
				right: 12px;
    		top: 12px;
			`};
		}
	}
`;

const Spacing = styled.div`
	position: relative;
	z-index: 1;
	padding-top: 60px;
	.spacing {
		&-explain {
			display: flex;
			align-items: center;
			gap: 32px;
			padding: 32px;
			.area {
				position: relative;
			}
		}
	}
	.clip {
		&-frame {
			position: relative;
			padding-top: 20px;
			&::after {
				content: '';
				position: absolute;
				right: 0;
				top: -20px;
				width: 80px;
				height: 60px;
				background: url(${clipIcon}) no-repeat center / contain;
				transform: rotate(180deg);
			}
			&.edit {
				position: absolute;
				right: 120px;
				top: 220px;
			}
		}
		&-inner {
			overflow: hidden;
			position: relative;
			background: no-repeat center top / cover;
			border-radius: 20px;
			box-shadow: ${props => props.theme.shadow.box};
			width: 628px;
			height: 356px;
			border: 3px solid #ffe993;
			&.part1 {
				background-image: url(${mainTa});
				background-position: center top 16%;
			}
			&.part2 {
				background-image: url(${mainTa});
				background-position: center bottom 28%;
				&-2 {
					background-image: url(${voucherSelect});
				}
			}
		}
	}
	&.learner {
		&-area {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 12px;
			padding: 110px 32px 0;
		}
	}
	&.master {
		&-area {
			display: flex;
			gap: 48px;
			justify-content: space-between;
			padding-top: 100px;
		}
	}
`;

const LearnerSmartDiv = styled(motion.div)`
	overflow: hidden;
	position: relative;
	width: 45%;
	height: 812px;
	border: 2px solid #000;
	border-radius: 20px;
	&.ta {
		width: 30%;
	}
	&.mo {
		width: 20%;
	}
`;

const LearnerSmartImg = styled(motion.img)`
	width: 100%;
`;

const MasterDashPc = styled.div`
	overflow: hidden;
	position: relative;
	width: 935px;
	height: 790px;
	border: 1px solid #000;
	border-left: 0;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	background: url(${masterDashboard}) no-repeat left top / cover;
`;

const MasterDashMo = styled.div`
	overflow: hidden;
	width: 360px;
	height: 1120px;
	margin: 112px 62px 0 0;
	border: 1px solid #000;
	border-radius: 20px;
	background: url(${masterDashboardMo}) no-repeat center top 62% / cover;
`;

const Title = styled.div`
	overflow: hidden;
	padding: 0 32px;
	${media.medium`
		padding: 0 24px;
	`};
	${media.small`
		padding: 0 16px;
	`};
`;

const TitleH1 = styled(motion.div)`
	position: absolute;
	left: 32px;
	top: 0;
	z-index: 1;
  color: rgba(35, 35, 35, 0.9);
	font-size: 32px;
  font-weight: 700;
	${media.large`
		padding: 0 42px;
	`};
	${media.medium`
		padding: 0;
		font-size: 80px !important;
	`};
	${media.smallToo`
		left: auto;
		right: auto;
		top: auto;
		font-size: 64px !important;
	`};
	&.right {
		left: auto;
		right: 32px;
		${media.medium`
			top: 50px;
			right: auto;
		`};
		${media.smallToo`
			font-size: 54px !important;
			line-height: 1.3;
		`};
		${media.micro`
			font-size: 40px !important;
		`};
	}
`;

const Text = styled(motion.div)`
	position: relative;
	z-index: 1;
  margin-top: 120px;
	color: #333;
  font-size: 18px;
  font-weight: 500;
	${media.medium`
		margin-top: 100px;
	`};
	background-color: rgba(255,255,255,0.9);
	padding: 24px;
	border-radius: 20px;
`;

const Content = styled.div`
	clear: both;
	padding: 20px 32px;
	${media.small`
		padding: 20px;
	`};
`;

const ContentTitle = styled.div`
	padding-bottom: 12px;
	font-size: 22px;
	font-weight: 700;
`;

const ScrollWindow = styled.div`
  overflow: hidden;
  position: relative;
	z-index: 1;
  width: calc(100% - 200px);
  height: calc(56.25vw - 26px);
  margin: 60px auto 0;
  border: 2px solid ${(props) => props.theme.bgColor.gray.first};
  border-radius: 18px;
	background-color: ${(props) => props.theme.textColor.gray.fifth};
	${media.medium`
		width: 95%;
	`};
`;

const ScrollerMain = styled(motion.div)`
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
`;

const ScrollerImg = styled(motion.img)`
  display: block;
  width: 100%;
  position: relative;
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
  ${media.small`
		padding: 9px;
		border-radius: 5px;
		font-size: 0;
	`};
  >svg {
    width: 32px;
    height: 32px;
    margin: 0 auto 8px;
		${media.small`
			width: 18px;
			height: 18px;
			margin: 0 auto;
		`};
  }
`;

const ImgBox = styled.div`
	position: relative;
	>img {
		width: 100%;
	}
`;

const ImgBoxSpacing = styled.div`
	position: relative;
	padding: 32px;
	${media.medium`
		padding: 32px 0 0;
	`};
	&.jobposting {
		.icon {
			&-shortcuts {
				right: auto;
				left: 3.5%;
				top: 3%;
				${media.small`
					top: 8%;
				`};
				&.step2 {
					right: 4%;
					left: auto;
					top: auto;
					bottom: 3.5%;
				}
			}
		}
	}
	>img {
		width: 100%;
	}
`;

const ImgBoxSpacingL = styled.div`
	position: relative;
	width: 100%;
	padding: 10px 32px 10px 0;
	text-align: left;
	&.jrounge {
		.icon {
			&-shortcuts {
				right: 14%;
				top: 3%;
			}
		}
		&-v2 {
			.icon {
				&-shortcuts {
					right: 14%;
					top: 3%;
					${media.small`
						right: 25%;
    				top: 13%;
					`};
				}
			}
		}
	}
	>img {
		width: 90%;
	}
`;

const ImgBoxSpacingR = styled.div`
	position: relative;
	width: 100%;
	padding: 10px 32px;
	text-align: right;
	&.jrounge {
		.icon {
			&-shortcuts {
				right: 14%;
				top: 3%;
				${media.small`
					right: 24%;
					top: 10%;
				`};
				&.step2 {
					right: 4%;
    			top: 34%;
					${media.small`
						right: 15%;
    				top: 38%;
					`};
				}
			}
		}
	}
	>img {
		width: 90%;
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
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 12px;
	${media.smallToo`
		gap: 12px 5px;
	`};
`;

const Box = styled(motion.li)`
	color: #333;
	font-size: 13px;
	font-weight: 500;
	${media.smallToo`
		flex: 0 0 calc(100%/2 - 5px/2*1);
	`};
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

function AiLemp() {
	// drag control
	const ScrollWindowInnerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
	const size = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ["48px", "144px", "200px", "245px"]);
	const size2 = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], ["48px", "130px", "144px", "204px"]);

	// 이미지 높이 담기
	const ScrollerMainRef = useRef<HTMLDivElement>(null);
	const ScrollerMainImgRef = useRef<HTMLImageElement>(null);
	const [isImageLoad, setIsImageLoad] = useState(false);
	// resize
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
		flag: "off"
	})
	// height
	const [itemH, setItemH] = useState({ ScrollerMainImgH: 0, ScrollWindowH: 0 });
	const imageHeight = () => {
		let ScrollerMainImgH = ScrollerMainImgRef.current?.offsetHeight || 0;
		let ScrollWindowH = ScrollWindowInnerRef.current?.offsetHeight || 0;
		// console.log(typeof ScrollerMainImgH, 'ScrollerMainImgH');
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
			flag: "on"
		})
		return (
			setItemH({ ScrollerMainImgH: ScrollerMainImgH, ScrollWindowH: ScrollWindowH })
		)
	}
	const handleResize = () => {
		setIsImageLoad(true);
		if (isImageLoad) {
			imageHeight();
		}
	}
	useEffect(() => {
		// scrollYProgress.onChange(() => {
		// 	console.log(scrollYProgress.get());
		// })
		if (isImageLoad) {
			// console.log("load?", ScrollerMainRef.current?.offsetHeight);
			// imageHeight();
			window.addEventListener('resize', handleResize);
			handleResize();
		}
		return () => {
			setIsImageLoad(false);
			window.removeEventListener('resize', handleResize);
		};
	}, [isImageLoad]);
	return (
		<div className="sub">
			<PageFrame>
				<Page>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size, color: "#003B71" }}>Color</TitleH1>
							<Text style={{ color: "#C9FBDF", backgroundColor: "transparent" }}>
								직접 제작한 VSQUARE의 System Kit 아래 var_function.scss 안 $primary, $secondary 변수에 <br className="tm-hide" />해당 프로젝트 단계별 Primary와 Secondary Color를 각 변수에 담아 체계적인 퍼블리싱 작업을 하였습니다.
							</Text>
						</Title>
						<Content>
							<ContentTitle style={{ color: "#00BD99" }}>Primary Color</ContentTitle>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#C9FBDF" }}>100</div>
									<span style={{ color: "#C9FBDF" }}>$primary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#95F8C9" }}>200</div>
									<span style={{ color: "#95F8C9" }}>$primary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#5EEBB5" }}>300</div>
									<span style={{ color: "#5EEBB5" }}>$primary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#35D7A9" }}>400</div>
									<span style={{ color: "#35D7A9" }}>$primary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#00BD99" }}>primary color</div>
									<span style={{ color: "#00BD99" }}>$primary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#00A292" }}>600</div>
									<span style={{ color: "#00A292" }}>$primary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#008887" }}>700</div>
									<span style={{ color: "#008887" }}>$primary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#00636D" }}>800</div>
									<span style={{ color: "#00636D" }}>$primary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#00495A" }}>900</div>
									<span style={{ color: "#00495A" }}>$primary--900</span>
								</Box>
							</Boxes>
						</Content>
						<Content>
							<ContentTitle style={{ color: "#00C3ED" }}>Secondary Color</ContentTitle>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#CBFEF7" }}>100</div>
									<span style={{ color: "#CBFEF7" }}>$secondary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#97FDF8" }}>200</div>
									<span style={{ color: "#97FDF8" }}>$secondary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#63F5F9" }}>300</div>
									<span style={{ color: "#63F5F9" }}>$secondary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#3DE1F4" }}>400</div>
									<span style={{ color: "#3DE1F4" }}>$secondary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#00C3ED" }}>secondary color</div>
									<span style={{ color: "#00C3ED" }}>$secondary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#0098CB" }}>600</div>
									<span style={{ color: "#0098CB" }}>$secondary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#0072AA" }}>700</div>
									<span style={{ color: "#0072AA" }}>$secondary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#005189" }}>800</div>
									<span style={{ color: "#005189" }}>$secondary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#003B71" }}>900</div>
									<span style={{ color: "#003B71" }}>$secondary--900</span>
								</Box>
							</Boxes>
						</Content>
					</div>
					<div className="section main">
						<Title>
							<TitleH1 style={{ fontSize: size, opacity }} className="right"># Main</TitleH1>
							<Text className="main-txt">
								아이스크림에듀사에서 주관하는 교육청 대상 교육 템플릿 사이트입니다. <br />
								각 교육청 별 Primary 와 Secondary Color를 설정하면 해당되는 컬러 및 스타일로 변경이 가능하게 SCSS의 변수를 사용하여 작업하였습니다. <br />
								폰트크기와 버튼 및 요소등을 사용자 편의를 위해 크게 작업하였습니다. <br />
								일반회원, 마스터로 사용자가 나뉘며 각 모드에 해당되는 UI를 제작하였습니다. <br />
							</Text>
						</Title>
						<ScrollWindow ref={ScrollWindowInnerRef}>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/ailemp/index.html") }} />
							<Info style={{ opacity }}>
								<FontAwesomeIcon icon={faArrowsUpDown} />
								Drag
							</Info>
							<ScrollerMain ref={ScrollerMainRef}>
								<ScrollerImg src={main} ref={ScrollerMainImgRef} alt="작업 페이지 미리보기" style={{ y: 0 }} drag="y" dragConstraints={ScrollWindowInnerRef} onLoad={() => { setIsImageLoad(true) }} initial={windowSize.flag === "on" && { y: 0 }} animate={windowSize.flag === "on" && { y: -`${Number((itemH.ScrollerMainImgH - itemH.ScrollWindowH))}` }} transition={{ type: "tween", ease: [1, .5, 2, .5], delay: 1.5, repeat: Infinity, duration: 15, delayChildren: 0.5 }} exit={{ y: 0 }} />
							</ScrollerMain>
						</ScrollWindow>
						<Spacing>
							<div className="spacing-explain">
								<div>
									<div className="clip-frame"><div className="clip-inner part1"></div></div>
								</div>
								<p className="txt-normal">스크롤 하여 해당 영역에 도달할 경우 누적, 일일 학습 데이터 분석, AI-LEMP와 함께한 시간의 숫자가 카운트 되는 효과를 <span className="point">Javascript의 객체로 저장하여 jQuery의 animate로 구현</span>하였습니다.</p>
							</div>
						</Spacing>
						<Spacing>
							<div className="spacing-explain">
								<p style={{ alignSelf: "flex-start", paddingTop: "110px" }} className="txt-normal"><span className="point">GSAP 자바스크립트 플러그인을 사용하여</span> 해당 영역에 도달할 경우 <br /> 첫번째 Row는 왼쪽으로, 두번째 Row는 오른쪽으로 <span className="point">흐르는 효과</span>를 구현하였습니다. <br /> 마우스 호버시, 멈추며 해당 아이템이 포커스되어 위로 올라가는 효과는 <span className="point">transform 스타일을 사용하여 on 클래스를 addClass</span> 하여 구현하였습니다.</p>
								<div className="area">
									<div className="clip-frame"><div className="clip-inner part2"></div></div>
									<div className="clip-frame edit"><div className="clip-inner part2-2"></div></div>
								</div>
							</div>
						</Spacing>
					</div>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size2, opacity }} className="right"># Dashboard</TitleH1>
							<Text>
								<span className="point">ApexCharts.js 오픈소스 플러그인</span>을 사용하여 <span className="point">디바이스별로 다른 그래프 형태를 옵션을 활용하여 완벽하게 구현</span>하였습니다. <br />
								로딩후 화면 진입시, 그래프의 각 아이템에 에니메이션 효과가 보입니다. <br />
								나의 학습 리포트, 학습 달성현황, 학습자 종합 리포트에 보이는 Bad, Good, Nice, Exellent, Perfect는 별도 evaluation라는 객체에 담아 활용하였습니다. <br />또한 임시데이터를 객체에 담아 작업하여 개발자의 작업 속도 향상에 기여하였습니다.
							</Text>
						</Title>
						<Spacing className="learner-area">
							<LearnerSmartDiv>
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hrdi/index_login_after.html") }} />
								<Info>
									<FontAwesomeIcon icon={faArrowsUpDown} />
									Drag
								</Info>
								<LearnerSmartImg src={learnerSmart} />
							</LearnerSmartDiv>
							<LearnerSmartDiv className="ta">
								<Info>
									<FontAwesomeIcon icon={faArrowsUpDown} />
									Drag
								</Info>
								<LearnerSmartImg src={learnerSmartTa} />
							</LearnerSmartDiv>
							<LearnerSmartDiv className="mo">
								<Info>
									<FontAwesomeIcon icon={faArrowsUpDown} />
									Drag
								</Info>
								<LearnerSmartImg src={learnerSmartMo} />
							</LearnerSmartDiv>
						</Spacing>
						<Spacing className="master-area">
							<MasterDashPc>
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hrdi/index_login_after.html") }} />
							</MasterDashPc>
							<MasterDashMo></MasterDashMo>
						</Spacing>
					</div>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size2, opacity }} className="right"># Sub Pages</TitleH1>
							<Text>학습과 사이트에 흥미를 유발하기위해 컬러풀한 색상 및 아이콘을 배치하여 좀 더 사이트에 오래 머물수 있도록 디자인 하였습니다.</Text>
						</Title>
						<Spacing>
							<ImgBoxSpacingR className="jrounge">
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_mypage_jlounge_region.html") }} />
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts step2" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_mypage_jlounge.html") }} />
								{/* <img src={jrounge} alt="작업 페이지 미리보기" /> */}
							</ImgBoxSpacingR>
							<ImgBoxSpacingL className="jrounge-v2">
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_mypage_jlounge_company.html") }} />
								{/* <img src={jroungeV2} alt="작업 페이지 미리보기" /> */}
							</ImgBoxSpacingL>
						</Spacing>
					</div>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size2, opacity }} className="right"># 채용공고</TitleH1>
							<Text>
								기업 회원의 경우, 직접 등록한 채용 공고의 현황과 공고에 지원한 지원자들을의 수를
								파악할 수 있도록 설계하였습니다. <br className="tm-hide" />각각의 콘텐츠 클릭시 해당하는 마이페이지 메뉴로 넘어가 상세한 내용을 볼 수 있습니다.
							</Text>
						</Title>
						<ImgBoxSpacing className="jobposting">
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_job_posting.html") }} />
							{/* <img src={notice} className="tm-hide" alt="작업 페이지 미리보기" />
							<img src={noticeTm} className="tm-show" alt="작업 페이지 미리보기" /> */}
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts step2" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_mypage_job_company.html") }} />
						</ImgBoxSpacing>
					</div>
				</Page>
			</PageFrame>
		</div>
	);
}
export default AiLemp;