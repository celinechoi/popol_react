import styled from "styled-components";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import main from "img/sub_pages/hsjob/index.png";
import mainTm from "img/sub_pages/hsjob/index_tm.png";
import worknet from "img/sub_pages/hsjob/worknet.png";
import worknetTm from "img/sub_pages/hsjob/worknet_tm.png";
import jrounge from "img/sub_pages/hsjob/jrounge.png";
import jroungeV2 from "img/sub_pages/hsjob/jrounge_v2.png";
import notice from "img/sub_pages/hsjob/apply_notice.png";
import noticeTm from "img/sub_pages/hsjob/apply_notice_tm.png";

const PageFrame = styled(motion.div)`
  margin-top: 48px;
	padding: 0 0 100px;
  border-radius: 20px;
	background: linear-gradient(260deg, #3b1e87, #ffb72e);
`;

const Page = styled.div`
	.section {
		position: relative;
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
	position: relative;
	&.worknet {
		.icon {
			&-shortcuts {
				right: auto;
				left: 32%;
				top: auto;
				bottom: 25%;
			}
		}
	}
	>img {
		width: 100%;
	}
`;

const ImgBoxSpacing = styled.div`
	position: relative;
	padding: 32px;
	&.jobposting {
		.icon {
			&-shortcuts {
				right: auto;
				left: 3.5%;
				top: 3%;
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
				&.step2 {
					right: 4%;
    			top: 34%;
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

function Hsjob() {
	// const motionValue = useMotionValue(0);
	// // const transform = useTransform(y);
	// drag control
	const ScrollWindowInnerRef = useRef<HTMLDivElement>(null);
	// const SrcollerMainH = useRef<HTMLDivElement>(null).current?.offsetHeight;
	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
	const size = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ["48px", "144px", "200px", "245px"]);
	const size2 = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], ["48px", "130px", "144px", "204px"]);
	useEffect(() => {
		scrollYProgress.onChange(() => {
			console.log(scrollYProgress.get());
		})
	}, []);


	return (
		<div className="sub">
			<PageFrame>
				<Page>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size, color: "#3b1e87", opacity }}>Color</TitleH1>
							<Text style={{ color: "#e1d2f9" }}>
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
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size, opacity }} className="right"># Main</TitleH1>
							<Text>한신대학교 한신J-라운지는 ‘한신대학교 대학일자리사업단’의 기존 홈페이지의 콘텐츠를 바탕으로 <br />재학생,지역 청년, 기업에게 취업 관련 서비스를 보다 쉽고 간편하게 이용할 수 있도록 각각의 사용자 중심으로홈페이지 리뉴얼을 진행하였습니다. <br />기존 사이트에서 사용하던 푸른색은 제외하고 한신대학교의 아이덴티티 컬러인 보라색상을 중심으로 잡아 밝은 느낌의 색상들과 매치하여 트렌디한 느낌으로 탄생시켰습니다.</Text>
						</Title>
						<ScrollWindow ref={ScrollWindowInnerRef}>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/index.html") }} />
							<Info style={{ opacity }}>
								<FontAwesomeIcon icon={faArrowsUpDown} />
								Drag
							</Info>
							<ScrollerMain variants={imgVariants} initial="start" animate="end" exit="exit" drag="y" dragConstraints={ScrollWindowInnerRef}></ScrollerMain>
						</ScrollWindow>
						<Spacing>
							<ImgBox>
								<img src={mainTm} alt="작업 페이지 미리보기" />
							</ImgBox>
						</Spacing>
					</div>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size2, opacity }} className="right"># 직업심리검사 (워크넷)</TitleH1>
							<Text>워크넷에서 시행하고있는 직업과 관련한 다양한 가치 중에서 어떤 가치를 주요하게 만족시키고 싶은지 알아볼 수 있는 직업 심리검사 서비스를 <br />한신 J-라운지에서도 이용할 수 있도록 홈페이지 컨셉에 맞게 제작하였습니다. <br />분류 선택시 자동으로 다음 분류 단계로 넘어가는 형태이며 마지막 직무를 선택하면 사용자가 선택한 직무에 관련된 정보가 나타나 정보를 습득할 수 있습니다.</Text>
						</Title>
						<ImgBox className="worknet">
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/c_info_job2.html") }} />
							<img src={worknet} alt="작업 페이지 미리보기" />
						</ImgBox>
					</div>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size2, opacity }} className="right"># J-라운지</TitleH1>
							<Text>재학생, 지역청년, 기업 각각의 형태로 제작하여 사용자가 필요로 하는 콘텐츠로 구성하였습니다. <br />
								재학생과 지역청년의 경우, 사용자가 얻고싶은 취업 정보에 관련된 정보를 스크랩하거나 상담을 신청하고 공고에 지원 내역을 한눈에 파악할 수 있도록 설계하였습니다.</Text>
						</Title>
						<Spacing>
							<ImgBoxSpacingR className="jrounge">
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_mypage_jlounge_region.html") }} />
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts step2" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_mypage_jlounge.html") }} />
								<img src={jrounge} alt="작업 페이지 미리보기" />
							</ImgBoxSpacingR>
							<ImgBoxSpacingL>
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_mypage_jlounge_company.html") }} />
								<img src={jroungeV2} alt="작업 페이지 미리보기" />
							</ImgBoxSpacingL>
						</Spacing>
					</div>
					<div className="section">
						<Title>
							<TitleH1 style={{ fontSize: size2, opacity }} className="right"># 채용공고</TitleH1>
							<Text>
								기업 회원의 경우, 직접 등록한 채용 공고의 현황과 공고에 지원한 지원자들을의 수를
								파악할 수 있도록 설계하였습니다. <br />각각의 콘텐츠 클릭시 해당하는 마이페이지 메뉴로 넘어가 상세한 내용을 볼 수 있습니다.
							</Text>
						</Title>
						<ImgBoxSpacing className="jobposting">
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_job_posting.html") }} />
							<img src={notice} alt="작업 페이지 미리보기" />
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts step2" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/hsjob/i_mypage_job_company.html") }} />
						</ImgBoxSpacing>
					</div>
				</Page>
			</PageFrame>
		</div>
	);
}
export default Hsjob;