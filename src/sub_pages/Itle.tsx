import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { media } from "style/media_query";
import main from "img/sub_pages/itle/index.png";
import mainTm from "img/sub_pages/itle/index_tm.png";
import sub from "img/sub_pages/itle/sub.png";
import subTm from "img/sub_pages/itle/sub_tm.png";
import subTmTa from "img/sub_pages/itle/sub_tm_ta.png";
import subTmMo from "img/sub_pages/itle/sub_tm_mo.png";
import campus from "img/sub_pages/itle/campus.png";
import campusTa from "img/sub_pages/itle/campus_ta.png";
import campusMo from "img/sub_pages/itle/campus_mo.png";
import campusBg from "img/sub_pages/itle/campus_bg.png";
import campusBgMo from "img/sub_pages/itle/campus_bg_mo.png";

const PageFrame = styled(motion.div)`
	overflow: hidden;
  margin-top: 48px;
  border-radius: 20px;
	background: linear-gradient(88deg, #6733b2, #ffc112);
	${media.small`
		margin-top: 0;
	`};
	${media.medium`
		margin-top: 32px;
		border-radius: 16px;
	`};
	${media.small`
		margin-top: 24px;
		border-radius: 12px;
	`};
`;

const Page = styled.div`
	padding-top: 60px;
	.section {
		position: relative;
		&.main {
			padding-top: 150px;
			background: url(${mainTm}) no-repeat right 100px top 160px / 550px auto;
			${media.small`
				padding-top: 90px;
				background-size: 70% auto;
				background-position: right top 3%;
			`};
			.right {
				top: 80px;
				${media.medium`
					top: 100px;
				`};
				${media.small`
					top: 80px;
				`};
			}
			.main {
				&-txt {
					background-color: rgba(255,255,255,0.6);
					padding: 32px;
					border-radius: 20px;
					${media.medium`
						margin-top: 80px;
						padding: 28px;
						border-radius: 16px;
					`};
					${media.small`
						margin-top: 70px;
						border-radius: 12px;
					`};
				}
			}
		}
		&.sub {
			&-bg {
				margin-top: 200px;
				padding-top: 0;
				background: url(${sub}) no-repeat center top / contain;
				${media.medium`
					margin-top: 130px;
				`};
				${media.small`
					background-size: auto 500px;
				`};
				&::after {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					z-index: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(255, 255, 255, 0.8);
				}
				.right {
					top: 76px;
					z-index: 1;
					${media.medium`
						top: 70px;
					`};
				}
				.sub {
					&-txt {
						z-index: 1;
						${media.medium`
							margin-top: 220px;
						`};
						${media.small`
							margin-top: 160px;
						`};
					}
				}
			}
			&-campus {
				position: relative;
				padding: 180px 0;
				${media.medium`
					padding: 0 0 100px;
				`};
				${media.small`
					padding: 100px 0;
				`};
				&::after {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					z-index: 0;
					width: 100%;
					height: 100%;
					background: url(${campusBg}) no-repeat center top / cover;
					opacity: 0.6;
					${media.small`
						background-image:  url(${campusBgMo});
					`};
				}
				.right {
					z-index: 1;
					top: 140px;
					${media.medium`
						top: 70px;
					`};
				}
				.sub {
					&-campus {
						&__txt {
							z-index: 1;
						}
					}
				}
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
	padding-top: 60px;
	${media.medium`
		padding-top: 40px;
	`};
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
  color: rgba(58, 58, 58, 0.4);
	font-size: 32px;
  font-weight: 700;
	line-height: 1;
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
    top: 50px;
		${media.medium`
			right: auto;
		`};
		${media.smallToo`
			font-size: 54px !important;
			line-height: 1.3;
		`};
		${media.micro`
			font-size: 46px !important;
		`};
	}
`;

const Text = styled(motion.div)`
	position: relative;
	z-index: 0;
  margin-top: 160px;
	color: #333;
  font-size: 18px;
  font-weight: 500;
	${media.medium`
		margin-top: 220px;
	`};
	${media.small`
		margin-top: 60px;
		font-size: 16px;
	`};
	&.color {
		&-txt {
			${media.medium`
				margin-top: 80px;
			`};
		}
	}
	&.sub {
		&-txt {
			margin-top: 290px;
			${media.medium`
				margin-top: 200px;
			`};
			${media.micro`
				margin-top: 160px;
				font-size: 15px;
			`};
		}
	}
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
  width: calc(100% - 200px);
  height: calc(56.25vw - 26px);
  margin: 130px 0 0 110px;
  border: 2px solid ${(props) => props.theme.bgColor.gray.first};
  border-radius: 18px;
	background-color: ${(props) => props.theme.textColor.gray.fifth};
	cursor: grab;
	${media.large`
		margin: 70px auto 0;
	`};
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
	&.sub {
		&-map {
			position: relative;
			z-index: 1;
			display: inline-block;
			width: 100%;
			margin-top: 100px;
			${media.medium`
				margin-top: 70px;
			`};
			${media.small`
				margin-top: 40px;
			`};
			.icon {
				&-shortcuts {
					right: auto;
					top: auto;
					&.item1 {
						left: 25%;
    				top: 1.5%;
						${media.medium`
							left: 38%;
    					top: 0.5%;
						`};
						${media.small`
							left: 38%;
    					top: 1%;
						`};
						${media.micro`
							left: 30%;
						`};
					}
					&.item2 {
						left: 57%;
    				top: 6.4%;
						${media.medium`
							left: auto;
							right: 12%;
    					top: 3.1%;
						`};
						${media.small`
							right: 9%;
    					top: 4.5%;
						`};
					}
					&.item3 {
						right: 7%;
						top: 1.5%;
						${media.medium`
							right: auto;
							left: 38%;
    					top: 28.7%;
						`};
						${media.small`
							left: 38%;
							top: 29.6%;
						`};
						${media.micro`
							left: 30%;
						`};
					}
					&.item4 {
						right: 8%;
    				top: 21%;
						${media.medium`
							right: 11.6%;
							top: auto;
							bottom: 25.5%;
						`};
						${media.small`
							right: auto;
							left: 38%;
							bottom: 21.2%;
						`};
						${media.micro`
							left: 30%;
							bottom: 20%;
						`};
					}
					&.item5 {
						left: 25%;
   					top: 44.2%;
						${media.medium`
							left: auto;
							right: 12%;
							top: 31.7%;
						`};
						${media.small`
							right: 9%;
    					top: 33.6%;
						`};
					}
					&.item6 {
						left: 57%;
    				top: 49.5%;
						${media.medium`
							left: 38%;
							top: 42.1%;							
						`};
						${media.small`
							left: 38%;
    					top: 43.9%;
						`};
						${media.micro`
							left: 30%;
						`};
					}
					&.item7 {
						right: 8%;
    				top: 52.9%;
						${media.medium`
						 	right: auto;
							left: 38%;
							top: 75.6%;
						`};
						${media.small`
							right: 9%;
							top: 75.9%;
							left: auto;
						`};
					}
				}
			}
		}
		&-campus {
			&-map {
				display: inline-block;
				position: relative;
				z-index: 1;
				width: 100%;
				.icon {
					&-shortcuts {
						&.step1 {
							right: auto;
							left: 30.5%;
							top: 9.5%;
							${media.medium`
								left: 31.5%;
							`};
							${media.small`
								left: 36.5%;
							`};
							${media.micro`
								left: 29.5%;
							`};
						}
						&.step2 {
								right: auto;
								left: 49.5%;
								top: 37%;
							${media.medium`
								left: auto;
								right: 32.5%;
							`};
							${media.small`
								left: auto;
								right: 18%;
								top: 34.7%;
							`};
						}
						&.step3 {
							right: 29%;
    					top: 37%;
							${media.medium`
								right: 5%;
							`};
							${media.small`
								right: 0.2%;
								top: 34.7%;
							`};
						}
					}
				}
			}
		}
	}
	>img {
		width: 100%;
	}
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

function Itle() {
	// drag control
	const ScrollWindowInnerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useViewportScroll();
	const size = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ["48px", "144px", "155px", "160px"]);
	const size2 = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], ["48px", "80px", "100px", "140px"]);

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
							<TitleH1 style={{ fontSize: size, color: "#6733b2" }}>Color</TitleH1>
							<Text style={{ color: "#ebd7fb" }} className="color-txt">
								직접 제작한 VSQUARE의 System Kit 아래 var_function.scss 안 $primary, $secondary 변수에 <br />해당 프로젝트 단계별 Primary와 Secondary Color를 각 변수에 담아 체계적인 퍼블리싱 작업을 하였습니다.
							</Text>
						</Title>
						<Content>
							<ContentTitle style={{ color: "#6733b2" }}>Primary Color</ContentTitle>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ebd7fb" }}>100</div>
									<span style={{ color: "#ebd7fb" }}>$primary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#d6b0f7" }}>200</div>
									<span style={{ color: "#d6b0f7" }}>$primary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#b584e7" }}>300</div>
									<span style={{ color: "#b584e7" }}>$primary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#9361d0" }}>400</div>
									<span style={{ color: "#9361d0" }}>$primary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#6733b2" }}>primary color</div>
									<span style={{ color: "#6733b2" }}>$primary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#4F2599" }}>600</div>
									<span style={{ color: "#4F2599" }}>$primary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#3b1980" }}>700</div>
									<span style={{ color: "#3b1980" }}>$primary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#291067" }}>800</div>
									<span style={{ color: "#291067" }}>$primary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#1c0955" }}>900</div>
									<span style={{ color: "#1c0955" }}>$primary--900</span>
								</Box>
							</Boxes>
						</Content>
						<Content>
							<ContentTitle style={{ color: "#ffc112" }}>Secondary Color</ContentTitle>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#fff7cf" }}>100</div>
									<span style={{ color: "#fff7cf" }}>$secondary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffeda0" }}>200</div>
									<span style={{ color: "#ffeda0" }}>$secondary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffe170" }}>300</div>
									<span style={{ color: "#ffe170" }}>$secondary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffd54d" }}>400</div>
									<span style={{ color: "#ffd54d" }}>$secondary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffc112" }}>secondary color</div>
									<span style={{ color: "#ffc112" }}>$secondary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#db9f0d" }}>600</div>
									<span style={{ color: "#db9f0d" }}>$secondary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#b78009" }}>700</div>
									<span style={{ color: "#b78009" }}>$secondary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#936305" }}>800</div>
									<span style={{ color: "#936305" }}>$secondary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#7a4e03" }}>900</div>
									<span style={{ color: "#7a4e03" }}>$secondary--900</span>
								</Box>
							</Boxes>
						</Content>
					</div>
					<div className="section main">
						<Title>
							<TitleH1 style={{ fontSize: size }} className="right"># Main</TitleH1>
							<Text className="main-txt">
								다양한 연령층이 사용하여 누구나 쉽게 원하는 정보를 바로 찾을 수 있게 접근성과 사용성의 무게를 두었습니다. <br className="ta-hide" />
								사용자들이 가장 먼저 접하는 첫화면에서 자주 사용하는 서비스를 배치하였으며 이해를 돕기 위해 아이콘을 함께 사용하였습니다. <br className="ta-hide" />또한 브랜드 컬러에서 도출된 서브 컬러들을 이용하여 화사하고 친근한 느낌을 주고자 하였습니다. <br className="ta-hide" />
								메인슬라이드 영역을 브랜드 로고 속 쉐입을 활용해 시각적 요소 또한 놓치지 않고 재미를 느낄 수 있게 디자인하였습니다.
							</Text>
						</Title>
						<ScrollWindow ref={ScrollWindowInnerRef}>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/index.html") }} />
							<Info style={{}}>
								<FontAwesomeIcon icon={faArrowsUpDown} />
								Drag
							</Info>
							<ScrollerMain ref={ScrollerMainRef}>
								<ScrollerImg src={main} ref={ScrollerMainImgRef} alt="작업 페이지 미리보기" style={{ y: 0 }} drag="y" dragConstraints={ScrollWindowInnerRef} onLoad={() => { setIsImageLoad(true) }} initial={windowSize.flag === "on" && { y: 0 }} animate={windowSize.flag === "on" && { y: -`${Number((itemH.ScrollerMainImgH - itemH.ScrollWindowH))}` }} transition={{ type: "tween", ease: [1, 1, 0.6, 1], delay: 1.5, repeat: Infinity, duration: 7 }} exit={{ y: 0 }} />
							</ScrollerMain>
						</ScrollWindow>
					</div>
					<div className="section sub-bg">
						<Title>
							<TitleH1 style={{ fontSize: size }} className="right"># Sub Page</TitleH1>
							<Text className="sub-txt">
								다소 지루할 수 있는 내용들에 일러스트와 다양한 컬러를 사용하여 쉽게 다가갈 수 있도록 하였습니다. <br className="ta-hide" />
								기존 인천인재평생교육원 사용자들에게 익숙한 좌측메뉴 사용과 브랜드 로고 속 책을 형상화한 쉐입을 이용하여 사용성과 디자인, 둘 다 갖추었습니다. <br />
								수강신청 시 사용자가 원하는 캠퍼스와 카테고리를 바로 검색할 수 있게 상단 필터를 배치하여 수강신청의 흐름을 유연하게 바꿔주었습니니다.
							</Text>
						</Title>
						<ImgBox className="sub-map">
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="item1 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/info_hello.html") }} />
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="item2 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/info_mission.html") }} />
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="item3 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/error.html") }} />
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="item4 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/member_login.html") }} />
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="item5 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/enrollment.html") }} />
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="item6 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/info_organization.html") }} />
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="item7 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/headquarters_campus.html") }} />
							<img src={subTm} className="tm-hide" alt="작업 페이지 미리보기" />
							<img src={subTmTa} className="ta-show" alt="작업 페이지 미리보기" />
							<img src={subTmMo} className="mo-show" alt="작업 페이지 미리보기" />
						</ImgBox>
					</div>
					<div className="section sub-campus">
						<Title>
							<TitleH1 style={{ fontSize: size2 }} className="right"># 캠퍼스 소개</TitleH1>
							<Text className="sub-campus__txt">
								시민라이프칼리지 인천시민대학 속 6개의 다양한 캠퍼스들을 소개합니다.<br className="mo-hide" />
								본부캠퍼스를 중심으로 인천시에 소재한 대학교이 포함되어 있는 캠퍼스들의 정보와
								교육과정, 혜택 등을 이미지와 아이콘을 활용하여 만나 볼 수 있게 디자인 하였습니다.
							</Text>
						</Title>
						<Spacing>
							<ImgBox className="sub-campus-map">
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="step1 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/headquarters_campus.html") }} />
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="step2 icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/sub_campus.html") }} />
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="step3 icon-shortcuts step3" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/itle/sub_campus2.html") }} />
								<img src={campus} className="tm-hide" alt="작업 페이지 미리보기" />
								<img src={campusTa} className="ta-show" alt="작업 페이지 미리보기" />
								<img src={campusMo} className="mo-show" alt="작업 페이지 미리보기" />
							</ImgBox>
						</Spacing>
					</div>
				</Page>
			</PageFrame>
		</div>
	);
}
export default Itle;