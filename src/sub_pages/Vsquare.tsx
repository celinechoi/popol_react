import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faArrowsUpDown, faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { media } from "style/media_query";
import symbol from "img/sub_pages/vsquare/symbol.svg";
import sass from "img/logo/sass_logo.svg";
import color from "img/sub_pages/vsquare/color.png";
import colorCode from "img/sub_pages/vsquare/color_code.png";
import primaryCode from "img/sub_pages/vsquare/primary_code.png";
import styleCode from "img/sub_pages/vsquare/style_code.png";
import input from "img/sub_pages/vsquare/input.png";
import typo from "img/sub_pages/vsquare/typo.png";
import gallery from "img/sub_pages/vsquare/gallery.png";
import notice from "img/sub_pages/vsquare/notice.png";
import detail from "img/sub_pages/vsquare/detail.png";
import mailing from "img/sub_pages/vsquare/mailing.png";
import join1 from "img/sub_pages/vsquare/join1.png";
import join2 from "img/sub_pages/vsquare/join2.png";
import error from "img/sub_pages/vsquare/error.png";

const PageFrame = styled(motion.div)`
  margin-top: 48px;
  border-radius: 20px;
	background: #000;
	color: #fff;
	${media.medium`
		margin-top: 32px;
		border-radius: 16px;
	`};
	${media.small`
		margin-top: 24px;
		border-radius: 12px;
	`};
	.txt {
		&-normal {
			color: #ddd;
			font-size: 18px;
			font-weight: 500;
			line-height: 1.9;
			${media.medium`
				font-size: 13px;
				line-height: 2.2;
			`};
			${media.small`
				font-size: 16px;
				line-height: 1.5;
			`};
		}
	}
	.point {
		display: inline-block;
		position: relative;
		z-index: 1;
		color: #fff;
		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
			background-color: rgba(255, 84, 58, 0.8);
			transform: skewX(-22deg);
			${media.smallToo`
				transform: skewX(0);
			`};
		}
	}
`;

const Page = styled.div`
	.section {
		position: relative;
		&.sub {
			padding-top: 110px;
			${media.large`
				padding-top: 80px;
			`};
			${media.small`
				padding-top: 60px;
			`};
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
	.spacing {
		&-explain {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 32px;
			padding: 32px 0;
			${media.large`
				gap: 24px;
			`};
			${media.medium`
				padding: 22px 0;
			`};
			${media.smallToo`
				flex-direction: column;
				gap: 20px;
			`};
			&.reverse {
				${media.small`
					flex-direction: column-reverse;
				`};
			}
			.area {
				position: relative;
				width: calc(60% - 24px/2*1);
				${media.smallToo`
					width: 100%;
				`};
				&-right {
					width: calc(40% - 24px/2*1);
					${media.medium`
						width: 48%;
					`};
					${media.smallToo`
						width: 100%;
					`};
				}
				&-v2 {
					width: calc(54% - 24px/2*1);
					${media.smallToo`
						width: 100%;
					`};
						&-right {
							width: calc(46% - 24px/2*1);
						${media.smallToo`
							width: 100%;
						`};
					}
				}
			};
		}
	}
	&.learner {
		&-area {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 12px;
			padding: 110px 32px 0;
			${media.large`
				padding-top: 70px;
			`};
			${media.medium`
				gap: 24px 0;
				padding: 70px 24px 0;
			`};
			${media.small`
				gap: 20px 0;
				padding: 40px 20px 0;
			`};
		}
	}
	&.master {
		&-area {
			display: flex;
			flex-wrap: wrap;
			gap: 48px;
			justify-content: space-between;
			position: relative;
			padding: 100px 0 320px;
			${media.large`
				gap: 32px;
				padding: 70px 0 130px;
			`};
			${media.medium`
				gap: 24px;
				padding: 24px 0 100px;
			`};
			${media.small`
				gap: 20px;
				padding: 20px 0 100px;
			`};
		}
	}
`;

const Clip = styled.div`
	.clip {
		&-frame {
			position: relative;
			&.code {
				&::after {
					content: '';
					position: absolute;
					right: 0;
					top: -20px;
					right: -15px;
					width: 65px;
					height: 25px;
					padding: 16px 8px;
					border: 1px solid #C66394;
					border-radius: 12px;
					background: #000 url(${sass}) no-repeat center / contain;;
					background-size: auto 37px;
					top: -9px;
				}
				${media.large`
					right: 24px;
					top: 110px;
					width: 100%;
				`};
				${media.small`
					right: 0;
				`};
				.clip {
					&-inner {
						border-color: #C66394;
					}
				}
			}
		}
	}
`;

const ClipFrame = styled(motion.div)`
	position: relative;
	&.code {
		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: -20px;
			right: -15px;
			width: 65px;
			height: 25px;
			padding: 16px 8px;
			border: 1px solid #C66394;
			border-radius: 12px;
			background: #000 url(${sass}) no-repeat center / contain;;
			background-size: auto 37px;
			top: -9px;
			${media.small`
				width: 45px;
				height: 5px;
				background-size: 48%;
				top: -9px;
				border-radius: 12px;
			`};
		}
	}
`;

const ClipInner = styled(motion.div)`
	overflow: hidden;
	position: relative;
	background: no-repeat center top / cover;
	border-radius: 20px;
	box-shadow: ${props => props.theme.shadow.box};
	width: 100%;
	height: 400px;
	border: 3px solid #e90000;
	${media.medium`
		border-radius: 16px;
	`};
	${media.small`
		border-radius: 12px;
	`};
	${media.micro`
		height: 136px;
	`};
	&.sass {
		border-color: #C66394;
	}
	&.part1 {
		background-image: url(${color});
		background-position: left -180px top -175px;
		background-size: 150%;
		${media.large`
			background-position: center bottom;
			background-size: cover;
			height: 270px;
		`};
		${media.small`
			height: 243px;
		`};
		${media.micro`
			height: 193px;
		`};
		&-1 {
			background-image: url(${colorCode});
			background-position: left bottom 10px;
		}
	}
	&.part2,
	&.part3 {
		height: auto;
	}
	&.part4 {
		height: 610px;
    background-size: 150%;
    background-position: center top -150px;
		background-image: url(${input});
		${media.large`
			height: 540px;
		`};
		${media.medium`
			height: 350px;
		`};
		${media.small`
			height: 280px;
		`};
		${media.micro`
			height: 200px;
		`};
	}
	&.part5 {
		height: 260px;
		background-image: url(${typo});
		background-size: 150%;
    background-position: center top -48px;
		${media.large`
			height: 160px;
		`};
		${media.micro`
			height: 80px;
		`};
	}
`;

const ClipImg = styled(motion.img)`
	width: 100%;
`;

const Gallerys = styled.ul`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 0 32px;
	${media.smallToo`
		flex-direction: column;
		gap: 32px;
	`};
`;

const Gallery = styled.li`
	&.item {
		flex: 0 0 calc(40% - 32px/2*1);
	}
	&.item2 {
		flex: 0 0 calc(35% - 32px/2*1);
	}
`;

const SubHeading = styled.div`
	padding-bottom: 20px;
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
	&.main {
		&-title {
			padding: 0;
		} 
	}
`;

const TitleH1 = styled(motion.div)`
	padding-bottom: 32px;
  color: #fff;
	font-size: 104px;
  font-weight: 700;
	line-height: 1.3;
	${media.large`
		font-size: 84px;
	`};
	${media.medium`
		font-size: 70px;
	`};
	${media.small`
		font-size: 61px;
	`};
	${media.micro`
		font-size: 37px;
	`};
	&.right {
		float: right;
	}
`;

const Part = styled(motion.div)`
	padding: 80px 32px 0;
	${media.large`
		padding: 60px 28px 0;
	`};
	${media.medium`
		padding: 40px 24px 0;
	`};
	${media.small`
		padding: 40px 20px 0;
	`};
`;

const Text = styled(motion.div)`
	clear: both;
	position: relative;
	z-index: 1;
	color: #000;
  font-size: 18px;
  font-weight: 500;
	background-color: rgba(255,255,255,0.7);
	padding: 24px;
	border-radius: 20px;
	${media.medium`
		padding: 18px;
    border-radius: 16px;
		font-size: 15px;
	`};
`;

const ContentTitle = styled.p`
	padding-bottom: 12px;
	color: #fff;
	font-size: 78px;
	font-weight: 700;
	${media.medium`
		font-size: 58px;
	`};
	${media.small`
		font-size: 35px;
	`};
	${media.micro`
		font-size: 28px;
	`};
`;

const Boxes = styled(motion.ul)`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 12px;
	margin-bottom: 28px;
	padding: 20px;
	background-color: rgba(255,255,255,0.3);
	border-radius: 20px;
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
	cursor: grab;
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

const SubPagesDiv = styled(motion.div)`
	position: relative;
	width: 100%;
	margin-top: 80px;
	padding: 0 0 230px;
	background-color: rgba(255, 255, 255, 0.9);
	${media.large`
		margin-top: 60px;
		padding: 0 0 120px;
	`};
	${media.medium`
		padding: 28px 0 350px;
	`};
	${media.small`
		padding: 0 0 120px;
	`};
	${media.micro`
		padding: 0 0 60px;
	`};
`;

const SubItem = styled.div`
	position: relative;
	clear: both;
	width: 100%;
	${media.small`
		width: 100%;
		margin: 0;
		padding: 0;
	`};
	>div {
		height: 600px;
		box-shadow: ${props => props.theme.shadow.box};
		background: no-repeat center top / 100% auto;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	&.item1 {
		padding-left: 120px;
		${media.large`
			padding-left: 4%;
			min-width: 60%;
		`};
		${media.small`
			padding-left: 0;
		`};
		>div {
			width: 820px;
			height: 360px;
			background-image: url(${gallery});
			background-position: center top;
			border-bottom-right-radius: 20px;
			border-bottom-left-radius: 20px;
			${media.large`
				width: 100%;
				background-position: center top 29%;
			`};
			${media.medium`
				border-radius: 16px;
			`};
			${media.small`
				border-radius: 12px;
			`};
			${media.smallToo`
				height: 180px;
			`};
			${media.micro`
				height: 140px;
			`};
		}
	}
	&.item2 {
		${media.large`
			min-width: 34%;
			padding-right: 2%;
		`};
		${media.small`
			padding-right: 0;
		`};
		>div {
			width: 380px;
			height: 410px;
			background-image: url(${notice});
			background-position: center top;
			border-bottom-right-radius: 20px;
			border-bottom-left-radius: 20px;
			${media.large`
				width: 100%;
			`};
			${media.medium`
				border-radius: 16px;
			`};
			${media.small`
				height: 300px;
				border-radius: 12px;
			`};
			${media.smallToo`
				height: 130px;
			`};
			${media.micro`
				height: 110px;
			`};
		}
		.icon {
			&-shortcuts {
				right: 74px;
				${media.large`
					right: 54px;
				`};
				${media.medium`
					right: 44px;
				`};
				${media.small`
					right: 24px;
				`};
				${media.smallToo`
					right: 12px;
				`};
			}
		}
	}
	&.item3 {
		padding: 0 0 0 60px;
		${media.large`
			padding-left: 4%;
    	min-width: 41%;
		`};
		${media.small`
			padding-left: 0;
		`};
		>div {
			width: 480px;
			height: 700px;
			border-radius: 20px;
			background-image: url(${join2});
			background-position: center top;
			background-size: cover;
			${media.large`
				width: 100%;
			`};
			${media.medium`
				height: 410px;
				background-position: center;
				border-radius: 16px;
			`};
			${media.small`
				height: 370px;
				border-radius: 12px;
			`};
			${media.smallToo`
				height: 140px;
				background-size: 100% auto;
			`};
		}
	}
	&.item4 {
		margin: 60px 40px 0 0;
		${media.large`
			margin-right: 5%;
			min-width: 40%;
		`};
		${media.small`
			margin: 0;
		`};
		>div {
			width: 785px;
			height: 490px;
			margin-left: auto;
			background-image: url(${detail});
			border-radius: 20px;
			${media.large`
				width: 100%;
			`};
			${media.medium`
				height: 350px;
				border-radius: 16px;
			`};
			${media.small`
				height: 330px;
				border-radius: 12px;
			`};
			${media.smallToo`
				height: 150px;
			`};
			${media.micro`
				height: 130px;
			`};
		}
	}
	&.item5 {
		top: -110px;
    right: 140px;
		min-width: 40%;
    width: 49%;
		${media.large`
			right: 2%;
		`};
		${media.medium`
			top: 0;
			right: 2%;
			margin-top: 2%;
		`};
		${media.small`
			margin-top: -2%;
		`};
		>div {
			width: 100%;
			height: 800px;
			background-image: url(${mailing});
			background-position: center top -10px;
			background-size: 270% auto;
			border-radius: 20px;
			${media.large`
				width: 100%;
				height: 530px;
				margin-right: 2%;
			`};
			${media.medium`
				height: 450px;
				border-radius: 16px;
			`};
			${media.small`
				height: 350px;
				border-radius: 12px;
			`};
			${media.smallToo`
				height: 170px;
			`};
			${media.micro`
				height: 130px;
			`};
		}
	}
	&.item6 {
		min-width: 31.4%;
    width: 31.4%;
		margin: 3% 0 0 7%;
		${media.large`
			margin: 3% 0 0 16%;
		`};
		${media.medium`
			margin: 7% 0 0 15.5%;
		`};
		${media.small`
			margin: 0 0 0 15.5%;
		`};
		>div {
			width: 100%;
			height: 1100px;
			background-image: url(${join1});
			background-position: center top;
			border-radius: 20px;
			${media.large`
				width: 100%;
			`};
			${media.medium`
				height: 500px;
				border-radius: 16px;
			`};
			${media.small`
				border-radius: 12px;
			`};
			${media.smallToo`
				height: 310px;
			`};
			${media.micro`
				height: 270px;
			`};
		}
	}
	&.item7 {
		${media.smallToo`
			padding: 0 20px;	
		`};
		>div {
			position: absolute;
			left: 47%;
			bottom: -120px;
			width: 36%;
			height: 540px;
			background-image: url(${error});
			background-position: center center;
			border-radius: 20px;
			${media.large`
				left: 49%;
				bottom: 240px;
				width: 35%;
				height: 450px;
			`};
			${media.medium`
				height: 320px;
				border-radius: 16px;
				bottom: -250px;
			`};
			${media.small`
				bottom: -104px;
				border-radius: 12px;
				height: 250px;
			`};
			${media.smallToo`
				bottom: -24px;
				height: 150px;
				left: 52%;
			`};
			${media.micro`
				bottom: -4px;
				height: 130px;
			`};
		}
		.icon {
			&-shortcuts {
				right: 20%;
				bottom: 340px;
				top: auto;
				${media.large`
					right: 19%;
					bottom: 610px;
				`};
				${media.medium`
					bottom: 0;
				`};
				${media.small`
					bottom: 87px;
				`};
				${media.smallToo`
					right: 17%;
					bottom: 77px;
				`};
			}
		}
	}
`;

const SubFlex = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 32px;
	width: 100%;
	${media.small`
		gap: 20px;
		padding: 20px 20px 0;
	`};
`;

function Vsquare() {
	// drag control
	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
	return (
		<div className="sub">
			<PageFrame>
				<Page>
					<div className="section">
						<Title>
							<TitleH1 style={{ opacity }} ># VSQUARE Systems <br />Guide Kit V2.2</TitleH1>
							<Text>
								디자이너, 개발자와 의논아래 VSQUARE만의 스타일 규칙을 담은 <span className="point">VSQUARE Systems Guide Kit(V.2.2)를 만들어 프로젝트 구축 및 운영 작업을 간소화 및 획일화</span> 하였습니다.
							</Text>
						</Title>
						<Part>
							<ContentTitle>var_function.scss</ContentTitle>
							<p className="txt-normal">자주 사용하는 그레이 스케일, 시스템 컬러, 미디어 쿼리, 프로젝트별 Primary와 Secondary, 폰트 패밀리, 자주 사용하는 스타일 등을 <span className="point">변수로 설정</span> 하였습니다.</p>
							<Spacing>
								<div className="spacing-explain">
									<div className="area">
										<Clip>
											<ClipFrame><ClipInner className="part1"></ClipInner></ClipFrame>
										</Clip>
									</div>
									<div className="area-right">
										<Clip>
											<ClipFrame className="code"><ClipInner className="sass part1-1"></ClipInner></ClipFrame>
										</Clip>
									</div>
								</div>
							</Spacing>
							<SubHeading><p className="page-h3" style={{ color: "#e90000" }}>Primary Color</p></SubHeading>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#fddccb" }}>100</div>
									<span style={{ color: "#fddccb" }}>$primary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#fcb197" }}>200</div>
									<span style={{ color: "#fcb197" }}>$primary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#f87d63" }}>300</div>
									<span style={{ color: "#f87d63" }}>$primary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#f14c3c" }}>400</div>
									<span style={{ color: "#f14c3c" }}>$primary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#e90000" }}>primary color</div>
									<span style={{ color: "#e90000" }}>$primary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#c80011" }}>600</div>
									<span style={{ color: "#c80011" }}>$primary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#a7001d" }}>700</div>
									<span style={{ color: "#a7001d" }}>$primary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#870023" }}>800</div>
									<span style={{ color: "#870023" }}>$primary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#6f0026" }}>900</div>
									<span style={{ color: "#6f0026" }}>$primary--900</span>
								</Box>
							</Boxes>
							<SubHeading><p className="page-h3" style={{ color: "#333" }}>Secondary Color</p></SubHeading>
							<Boxes>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#f4f4f4" }}>100</div>
									<span style={{ color: "#f4f4f4" }}>$secondary--100</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#eaeaea" }}>200</div>
									<span style={{ color: "#eaeaea" }}>$secondary--200</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#c1c1c1" }}>300</div>
									<span style={{ color: "#c1c1c1" }}>$secondary--300</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#848484" }}>400</div>
									<span style={{ color: "#848484" }}>$secondary--400</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#333" }}>secondary color</div>
									<span style={{ color: "#333" }}>$secondary--color</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#2b2525" }}>600</div>
									<span style={{ color: "#2b2525" }}>$secondary--600</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#24191b" }}>700</div>
									<span style={{ color: "#24191b" }}>$secondary--700</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#1d1013" }}>800</div>
									<span style={{ color: "#1d1013" }}>$secondary--800</span>
								</Box>
								<Box>
									<div className="color-box" style={{ backgroundColor: "#18090e" }}>900</div>
									<span style={{ color: "#18090e" }}>$secondary--900</span>
								</Box>
							</Boxes>
							<Gallerys>
								<Gallery className="item">
									<Clip>
										<ClipFrame className="code"><ClipInner className="part2 sass"><ClipImg src={primaryCode} alt="sass code" /></ClipInner></ClipFrame>
									</Clip>
								</Gallery>
								<Gallery className="item2">
									<Clip>
										<ClipFrame className="code"><ClipInner className="part3 sass"><ClipImg src={styleCode} alt="sass code" /></ClipInner></ClipFrame>
									</Clip>
								</Gallery>
							</Gallerys>
						</Part>
						<Part>
							<ContentTitle>systems.scss</ContentTitle>
							<p className="txt-normal">타이틀 폰트, input 등 정형화된 스타일을 systems.scss안에 반영하여 해당 <span className="point">스타일이 필요할때 정의해놓은 클래스를 사용하여 작업 시간을 단축하는데 기여</span>하였습니다.</p>
							<Spacing>
								<div className="spacing-explain">
									<div className="area-v2">
										<Clip>
											<ClipFrame><ClipInner className="part4"></ClipInner></ClipFrame>
										</Clip>
									</div>
									<div className="area-v2-right">
										<Clip>
											<ClipFrame><ClipInner className="part5"></ClipInner></ClipFrame>
										</Clip>
									</div>
								</div>
							</Spacing>
						</Part>
					</div>
					<div className="section sub">
						<Title>
							<TitleH1 style={{ opacity }} className="right"># DEMO Pages</TitleH1>
							<Text>게시판, 갤러리, 상세페이지 부터 회원페이지까지 <span className="point">VSQUARE의 솔루션이 녹아있는 기본 템플릿을 VSQUARE Systems Guide Kit V2.2 바탕으로 작업</span>하였습니다. </Text>
						</Title>
						<Spacing>
							<SubPagesDiv>
								<SubFlex>
									<SubItem className="item1">
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/ailemp/learner-application.html") }} />
										<div></div>
									</SubItem>
									<SubItem className="item2">
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/ailemp/join2.html") }} />
										<div></div>
									</SubItem>
								</SubFlex>
								<SubFlex>
									<SubItem className="item3">
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/ailemp/profile-select.html") }} />
										<div></div>
									</SubItem>
									<SubItem className="item4">
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/ailemp/learner-result.html") }} />
										<div></div>
									</SubItem>
								</SubFlex>
								<SubFlex>
									<SubItem className="item6">
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/ailemp/contact.html") }} />
										<div></div>
									</SubItem>
									<SubItem className="item5">
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/ailemp/contact.html") }} />
										<div></div>
									</SubItem>
								</SubFlex>
								<SubItem className="item7">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-shortcuts" title="퍼블 작업물 바로가기" onClick={() => { window.open("https://celinechoi.github.io/Publish-vsquare/ailemp/contact.html") }} />
									<div></div>
								</SubItem>
							</SubPagesDiv>
						</Spacing>
					</div>
				</Page>
			</PageFrame>
		</div>
	);
}
export default Vsquare;