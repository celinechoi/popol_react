import styled from "styled-components";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { media } from "style/media_query";
import main from "img/sub_pages/hrdi/index.png";

const PageFrame = styled(motion.div)`
	overflow: hidden;
  margin-top: 48px;
  border-radius: 20px;
	background: linear-gradient(262deg, #1f5afc, #ffc500);
	${media.small`
		margin-top: 0;
	`};
`;

const Page = styled.div`
	padding-top: 60px;
	.section {
		position: relative;
		&.main {
			padding-top: 110px;
			${media.small`
				padding-top: 90px;
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
					${media.medium`
						margin-top: 80px;
					`};
					${media.small`
						margin-top: 70px;
					`};
				}
			}
		}
		&.sub {
			&-bg {
				margin-top: 130px;
				padding-top: 0;
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
					opacity: 0.6;
					${media.small`
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
  color: rgba(250, 250, 250, 0.4);
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
	color: #fff;
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
  width: 750px;
  height: 500px;
  margin: 50px auto 0;
  border: 2px solid ${(props) => props.theme.bgColor.gray.first};
  border-radius: 18px;
	background-color: ${(props) => props.theme.textColor.gray.fifth};
	${media.large`
		margin-top: 250px;
	`};
	${media.medium`
		width: 95%;
    height: 300px;
		margin: 40% auto 0;
	`};
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
  height: 1340px;
  background: rgba(255, 255, 255, 0.5);
  background: url(${main}) no-repeat center top / contain;
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

const linkVariants = {
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

function Hrdi() {
	// const motionValue = useMotionValue(0);
	// // const transform = useTransform(y);
	// drag control
	const ScrollWindowInnerRef = useRef<HTMLDivElement>(null);
	// const SrcollerMainH = useRef<HTMLDivElement>(null).current?.offsetHeight;
	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
	const size = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ["48px", "144px", "155px", "160px"]);
	const size2 = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], ["48px", "80px", "100px", "140px"]);
	useEffect(() => {
		scrollYProgress.onChange(() => {
			// console.log(scrollYProgress.get());
		})
	}, []);


	return (
		<div className="sub">
			<PageFrame>
				<Page>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size, color: "#1f5afc", opacity }}>Color</TitleH1>
							<Text style={{ color: "#eef3ff" }} className="color-txt">
								직접 제작한 VSQUARE의 System Kit 아래 var_function.scss 안 $primary, $secondary 변수에 <br />해당 프로젝트 단계별 Primary와 Secondary Color를 각 변수에 담아 체계적인 퍼블리싱 작업을 하였습니다.
							</Text>
						</Title>
						<Content>
							<ContentTitle style={{ color: "#1f5afc" }}>Primary Color</ContentTitle>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#eef3ff" }}>100</div>
									<span style={{ color: "#eef3ff" }}>$primary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#cadaff" }}>200</div>
									<span style={{ color: "#cadaff" }}>$primary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#78a3fe" }}>300</div>
									<span style={{ color: "#78a3fe" }}>$primary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#4476ff" }}>400</div>
									<span style={{ color: "#4476ff" }}>$primary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#1f5afc" }}>primary color</div>
									<span style={{ color: "#1f5afc" }}>$primary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#174fe7" }}>600</div>
									<span style={{ color: "#174fe7" }}>$primary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#1345ce" }}>700</div>
									<span style={{ color: "#1345ce" }}>$primary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#0c37ab" }}>800</div>
									<span style={{ color: "#0c37ab" }}>$primary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#042785" }}>900</div>
									<span style={{ color: "#042785" }}>$primary--900</span>
								</Box>
							</Boxes>
						</Content>
						<Content>
							<ContentTitle style={{ color: "#ffc500" }}>Secondary Color</ContentTitle>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#fff9e6" }}>100</div>
									<span style={{ color: "#fff9e6" }}>$secondary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffecb1" }}>200</div>
									<span style={{ color: "#ffecb1" }}>$secondary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffe082" }}>300</div>
									<span style={{ color: "#ffe082" }}>$secondary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffd64a" }}>400</div>
									<span style={{ color: "#ffd64a" }}>$secondary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffc500" }}>secondary color</div>
									<span style={{ color: "#ffc500" }}>$secondary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffb600" }}>600</div>
									<span style={{ color: "#ffb600" }}>$secondary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffae0c" }}>700</div>
									<span style={{ color: "#ffae0c" }}>$secondary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ffa200" }}>800</div>
									<span style={{ color: "#ffa200" }}>$secondary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#ff9100" }}>900</div>
									<span style={{ color: "#ff9100" }}>$secondary--900</span>
								</Box>
							</Boxes>
						</Content>
					</div>
					<div className="section main">
						<Title>
							<TitleH1 style={{ fontSize: size }} className="right"># Main</TitleH1>
							<Text className="main-txt">
								다양한 연령층이 사용하는 서비스를 보다 쉽고<br className="mo-show" /> 직관적으로 이해할 수 있도록 사용성을 높이는데 <br className="mo-show" />중점을 두었습니다.<br className="mobile_hide" />
								사용자가 많이 찾는 로그인,<br className="mo-show" /> 자주찾는 서비스 퀵메뉴, 교육장소 찾기를 메인에 노출해<br className="mo-show" /> 자연스럽게 정보에<br className="mo-hide" />
								접근할 수 있도록 유도하는 구조로<br className="mo-show" /> 개선하여 사용성을 높였습니다.
							</Text>
						</Title>
						<ScrollWindow ref={ScrollWindowInnerRef}>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hrdi/index_login_after.html") }} />
							<Info style={{}}>
								<FontAwesomeIcon icon={faArrowsUpDown} />
								Drag
							</Info>
							<ScrollerMain variants={imgVariants} initial="start" animate="end" exit="exit" drag="y" dragConstraints={ScrollWindowInnerRef}></ScrollerMain>
						</ScrollWindow>
						{/* <Spacing>
							<ImgBox className="main-tm">
								<img src={mainTm} className="tm-hide" alt="작업 페이지 미리보기" />
							</ImgBox>
						</Spacing> */}
					</div>
					<div className="section sub-bg">
						<Title>
							<TitleH1 style={{ fontSize: size }} className="right"># Sub Page</TitleH1>
							<Text className="sub-txt">
								다소 지루할 수 있는 내용들에 일러스트와 다양한 컬러를 사용하여 쉽게 다가갈 수 있도록 하였습니다.<br className="tm-hide" />
								기존 인천인재평생교육원 사용자들에게 익숙한 좌측메뉴 사용과 브랜드 로고 속 책을 형상화한 쉐입을 이용하여 사용성과 디자인, 둘 다 갖추었습니다.<br className="mo-hide" />
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
							{/* <img src={subTm} className="tm-hide" alt="작업 페이지 미리보기" />
							<img src={subTmTa} className="ta-show" alt="작업 페이지 미리보기" />
							<img src={subTmMo} className="mo-show" alt="작업 페이지 미리보기" /> */}
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
								{/* <img src={campus} className="tm-hide" alt="작업 페이지 미리보기" />
								<img src={campusTa} className="ta-show" alt="작업 페이지 미리보기" />
								<img src={campusMo} className="mo-show" alt="작업 페이지 미리보기" /> */}
							</ImgBox>
						</Spacing>
					</div>
				</Page>
			</PageFrame>
		</div>
	);
}
export default Hrdi;