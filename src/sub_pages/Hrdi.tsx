import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import { media } from 'style/media_query';
import main from 'img/sub_pages/hrdi/index.png';
import headIcon from 'img/sub_pages/hrdi/head_icon.svg';
import headIconTa from 'img/sub_pages/hrdi/head_icon_ta.svg';
import headIconMo from 'img/sub_pages/hrdi/head_icon_mo.svg';
import dashboardImg from 'img/sub_pages/hrdi/dashboard.png';
import subjectImg from 'img/sub_pages/hrdi/dashboard_subject.png';
import koreatechBg from 'img/sub_pages/hrdi/koreatech_bg.svg';
import koreatechBgTa from 'img/sub_pages/hrdi/koreatech_bg_ta.svg';
import koreatechBgMo from 'img/sub_pages/hrdi/koreatech_bg_mo.svg';
import login from 'img/sub_pages/hrdi/login.png';
import loginTa from 'img/sub_pages/hrdi/login_ta.png';
import loginMo from 'img/sub_pages/hrdi/login_mo.png';
import loginMoV2 from 'img/sub_pages/hrdi/login_mo_v2.png';
import sub from 'img/sub_pages/hrdi/sub.png';

const PageFrame = styled(motion.div)`
  overflow: hidden;
  margin-top: 48px;
  border-radius: 20px;
  background: linear-gradient(262deg, #1f5afc, #ffc500);
  ${media.medium`
		margin-top: 32px;
		border-radius: 16px;
	`};
  ${media.small`
		margin-top: 24px;
		border-radius: 12px;
	`};
  ${media.small`
		margin-top: 0;
	`};
`;

const Page = styled.div`
  padding-top: 60px;
  .section {
    position: relative;
    &.main {
      position: relative;
      margin-top: 110px;
      padding: 110px 0 0;
      ${media.medium`
				margin-top: 0;
				padding: 0;
			`};
      ${media.small`
				padding-top: 90px;
			`};
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #8eafff url(${koreatechBg}) no-repeat center top / cover;
        opacity: 0.7;
        ${media.medium`
					background-image: url(${koreatechBgTa});
				`};
        ${media.small`
					background-image: url(${koreatechBgMo});
				`};
      }
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 19.4%;
        transform: translateX(-50%);
        width: 74%;
        height: 100%;
        background: url(${headIcon}) no-repeat center top / contain;
        ${media.medium`
					top: 15%;
					width: 100%;
    			height: 20%;
					background-image: url(${headIconTa});
				`};
        ${media.small`
					top: 23%;
					background-image: url(${headIconMo});
				`};
      }
      .right {
        top: 80px;
        ${media.medium`
					top: 70px;
				`};
        ${media.small`
					top: 80px;
				`};
      }
      .main {
        &-txt {
          margin-bottom: 100px;
          ${media.medium`
						margin-top: 220px;
					`};
          ${media.small`
						margin: 80px 0 0;
					`};
        }
      }
    }
    &.sub {
      &-bg {
        padding-top: 0;
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
          color: #333;
          opacity: 0.4;
          ${media.medium`
						top: 70px;
					`};
        }
        .sub {
          &-txt {
            z-index: 1;
            color: #333;
            ${media.medium`
							margin-top: 220px;
						`};
            ${media.small`
							margin-top: 160px;
						`};
          }
        }
        img {
          display: block;
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
      background-color: ${(props) => props.theme.point.green};
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
  padding: 60px 0;
  ${media.medium`
		padding: 40px 0;
	`};
  &.learner {
    &-area {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;
      padding: 32px 32px 80px;
      ${media.large`
				padding-top: 70px;
			`};
      ${media.medium`
				flex-direction: column;
				gap: 12px;
				padding: 0 24px 60px;
			`};
      ${media.small`
				padding: 40px 20px 60px;
			`};
    }
  }
`;

const Device = styled.div`
  overflow: hidden;
  flex: 0 0 calc(100% / 2 - 24px / 2 * 1);
  ${media.medium`
		flex-basis: 100%;
	`};
  p {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    text-align: right;
    width: 100%;
    padding: 0 12px 8px 0;
    opacity: 0.7;
  }
`;

const LearnerSmartDiv = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 332px;
  border: 2px solid #000;
  border-radius: 20px;
  cursor: grab;
  ${media.large`
		height: 210px;
	`};
  ${media.medium`
		height: 332px;
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
`;

const LearnerSmartImg = styled(motion.img)`
  width: 100%;
`;

const MainSection = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 110px;
  padding-bottom: 110px;
  ${media.small`
		margin-top: 80px;
		padding-bottom: 80px;
	`};
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 550px;
    background-color: rgba(255, 255, 255, 0.3);
    ${media.medium`
			height: 20%;
		`};
  }
  .section {
    &-title {
      text-align: center;
    }
  }
  .mainsection {
    &-txt {
      margin-top: 0;
    }
  }
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
		margin-top: 120px;
	`};
  ${media.small`
		margin-top: 60px;
		font-size: 16px;
	`};
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
      height: 100%;
      background-color: rgba(255, 84, 58, 0.8);
      transform: skewX(-22deg);
      ${media.smallToo`
				transform: skewX(0);
			`};
    }
  }
  &.mainsection {
    &-txt {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
      ${media.medium`
				top: 60%;
    		left: 64%;
			`};
      ${media.small`
				width: 90%;
				top: 30%;
				left: 50%;
			`};
    }
  }
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
  z-index: 2;
  width: calc(100% - 200px);
  height: calc(56.25vw - 26px);
  margin: 50px auto 0;
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
  > svg {
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
  &.mainsection {
    &-map {
      display: inline-block;
      position: relative;
      .mo {
        &-img {
          padding-top: 60%;
        }
      }
    }
  }
  &.sub {
    &-map {
      position: relative;
      z-index: 1;
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
            right: 28%;
            top: 1%;
          }
          &.item2 {
            right: 9%;
            top: 1%;
          }
          &.item3 {
            left: 18%;
            top: 32.5%;
            ${media.medium`
							left: 15%;
							top: 34%;
						`};
            ${media.small`
							left: 5%;
						`};
          }
          &.item4 {
            right: 28%;
            top: 32.5%;
            ${media.medium`
							top: 34%;
						`};
            ${media.small`
							right: 30%;
						`};
          }
          &.item5 {
            right: 17.5%;
            top: 32.5%;
            ${media.medium`
							right: 14%;
							top: 34%;
						`};
            ${media.small`
							bottom: 4%;
							right: 4%;
						`};
          }
          &.item6 {
            right: 18.6%;
            bottom: 20.2%;
            ${media.medium`
							bottom: 15%;
						`};
            ${media.small`
							bottom: 4%;
							right: 21.6%;
						`};
          }
        }
      }
    }
  }
  > img {
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

function Hrdi() {
  // drag control
  const ScrollWindowInnerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const size = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ['48px', '120px', '130px', '140px']);

  // sub drag
  const LearnerSmartDivRef = useRef<HTMLDivElement>(null);
  const LearnerSmartDivTaRef = useRef<HTMLDivElement>(null);
  // 이미지 높이 담기
  const ScrollerMainRef = useRef<HTMLDivElement>(null);
  const ScrollerMainImgRef = useRef<HTMLImageElement>(null);
  const [isImageLoad, setIsImageLoad] = useState(false);
  // resize
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    flag: 'off',
  });
  // height
  const [itemH, setItemH] = useState({ ScrollerMainImgH: 0, ScrollWindowH: 0 });
  const imageHeight = () => {
    let ScrollerMainImgH = ScrollerMainImgRef.current?.offsetHeight || 0;
    let ScrollWindowH = ScrollWindowInnerRef.current?.offsetHeight || 0;
    // console.log(typeof ScrollerMainImgH, 'ScrollerMainImgH');
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      flag: 'on',
    });
    return setItemH({ ScrollerMainImgH: ScrollerMainImgH, ScrollWindowH: ScrollWindowH });
  };
  useEffect(() => {
    const handleResize = () => {
      setIsImageLoad(true);
      if (isImageLoad) {
        imageHeight();
      }
    };
    if (isImageLoad) {
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
              <TitleH1 style={{ fontSize: size, color: '#1f5afc', opacity }}>Color</TitleH1>
              <Text style={{ color: '#eef3ff' }} className="color-txt">
                직접 제작한 VSQUARE의 System Kit 아래 var_function.scss 안 $primary, $secondary 변수에 <br />
                해당 프로젝트 단계별 Primary와 Secondary Color를 각 변수에 담아 체계적인 퍼블리싱 작업을 하였습니다.
              </Text>
            </Title>
            <Content>
              <ContentTitle style={{ color: '#1f5afc' }}>Primary Color</ContentTitle>
              <Boxes>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#eef3ff' }}>
                    100
                  </div>
                  <span style={{ color: '#eef3ff' }}>$primary--100</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#cadaff' }}>
                    200
                  </div>
                  <span style={{ color: '#cadaff' }}>$primary--200</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#78a3fe' }}>
                    300
                  </div>
                  <span style={{ color: '#78a3fe' }}>$primary--300</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#4476ff' }}>
                    400
                  </div>
                  <span style={{ color: '#4476ff' }}>$primary--400</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#1f5afc' }}>
                    primary color
                  </div>
                  <span style={{ color: '#1f5afc' }}>$primary--color</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#174fe7' }}>
                    600
                  </div>
                  <span style={{ color: '#174fe7' }}>$primary--600</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#1345ce' }}>
                    700
                  </div>
                  <span style={{ color: '#1345ce' }}>$primary--700</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#0c37ab' }}>
                    800
                  </div>
                  <span style={{ color: '#0c37ab' }}>$primary--800</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#042785' }}>
                    900
                  </div>
                  <span style={{ color: '#042785' }}>$primary--900</span>
                </Box>
              </Boxes>
            </Content>
            <Content>
              <ContentTitle style={{ color: '#ffc500' }}>Secondary Color</ContentTitle>
              <Boxes>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#fff9e6' }}>
                    100
                  </div>
                  <span style={{ color: '#fff9e6' }}>$secondary--100</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#ffecb1' }}>
                    200
                  </div>
                  <span style={{ color: '#ffecb1' }}>$secondary--200</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#ffe082' }}>
                    300
                  </div>
                  <span style={{ color: '#ffe082' }}>$secondary--300</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#ffd64a' }}>
                    400
                  </div>
                  <span style={{ color: '#ffd64a' }}>$secondary--400</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#ffc500' }}>
                    secondary color
                  </div>
                  <span style={{ color: '#ffc500' }}>$secondary--color</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#ffb600' }}>
                    600
                  </div>
                  <span style={{ color: '#ffb600' }}>$secondary--600</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#ffae0c' }}>
                    700
                  </div>
                  <span style={{ color: '#ffae0c' }}>$secondary--700</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#ffa200' }}>
                    800
                  </div>
                  <span style={{ color: '#ffa200' }}>$secondary--800</span>
                </Box>
                <Box>
                  <div className="color-box" style={{ backgroundColor: '#ff9100' }}>
                    900
                  </div>
                  <span style={{ color: '#ff9100' }}>$secondary--900</span>
                </Box>
              </Boxes>
            </Content>
          </div>
          <div className="section main">
            <Title>
              <TitleH1 style={{ fontSize: size }} className="right">
                # Main
              </TitleH1>
              <Text className="main-txt">
                다양한 연령층이 사용하는 서비스를 보다 쉽고 직관적으로 이해할 수 있도록 사용성을 높이는데 중점을 두었습니다. <br className="tm-show" />
                사용자가 많이 찾는 로그인, 자주찾는 서비스 퀵메뉴, 교육장소 찾기를 메인에 노출해 자연스럽게 정보에 접근할 수 있도록 유도하는 구조로 개선하여 사용성을 높였습니다.
              </Text>
            </Title>
            <ScrollWindow ref={ScrollWindowInnerRef}>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="icon-shortcuts"
                title="퍼블 작업물 바로가기"
                onClick={() => {
                  window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/index_login_after.html');
                }}
              />
              <Info>
                <FontAwesomeIcon icon={faArrowsUpDown} />
                Drag
              </Info>
              <ScrollerMain ref={ScrollerMainRef}>
                <ScrollerImg
                  src={main}
                  ref={ScrollerMainImgRef}
                  alt="작업 페이지 미리보기"
                  style={{ y: 0 }}
                  drag="y"
                  dragConstraints={ScrollWindowInnerRef}
                  onLoad={() => {
                    setIsImageLoad(true);
                  }}
                  initial={windowSize.flag === 'on' && { y: 0 }}
                  animate={windowSize.flag === 'on' && { y: -`${Number(itemH.ScrollerMainImgH - itemH.ScrollWindowH)}` }}
                  transition={{ type: 'tween', ease: [1, 1, 0.6, 1], delay: 1.5, repeat: Infinity, duration: 7 }}
                  exit={{ y: 0 }}
                />
              </ScrollerMain>
            </ScrollWindow>
            <MainSection>
              <Title>
                <p className="section-title">로그인 & 나의 학습활동</p>
              </Title>
              <ImgBox className="mainsection-map">
                <img src={login} className="tm-hide" alt="작업 페이지 미리보기" />
                <img src={loginTa} className="ta-show" alt="작업 페이지 미리보기" />
                <img src={loginMo} className="mo-show" alt="작업 페이지 미리보기" />
                <img src={loginMoV2} className="mo-show mo-img" alt="작업 페이지 미리보기" />
                <Text className="mainsection-txt">
                  첫 화면에서 자주 사용하는 <br className="lp-show mo-hide" />
                  로그인, 나의 학습활동, 내 정보 서비스를 <br className="tm-hide" />
                  모아 편의성을 높였습니다. <br className="lp-show" />
                  메인슬라이드에서 화살표를 클릭하면 <br className="tm-hide" />
                  빠르게 서비스를 이용할 수 있습니다.
                </Text>
              </ImgBox>
            </MainSection>
          </div>
          <div className="section">
            <Title>
              <TitleH1 style={{ fontSize: size }} className="right">
                # Dashboard
              </TitleH1>
              <Text className="main-txt">
                학습자 대시보드를 어느 디바이스에서든 최적화된 UI로 볼 수 있게 퍼블리싱 하였습니다. <br />
                또한 <span className="point">Chart.js 플러그인을 활용</span>하여 반응형 페이지를 만들었습니다.
              </Text>
            </Title>
            <Spacing className="learner-area">
              <Device>
                <p>패키지(과정) 홈</p>
                <LearnerSmartDiv ref={LearnerSmartDivRef}>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="icon-shortcuts"
                    title="퍼블 작업물 바로가기"
                    onClick={() => {
                      window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/lms/dashboard.html');
                    }}
                  />
                  <Info>
                    <FontAwesomeIcon icon={faArrowsUpDown} />
                    Drag
                  </Info>
                  <LearnerSmartImg src={dashboardImg} drag="y" dragConstraints={LearnerSmartDivRef} />
                </LearnerSmartDiv>
              </Device>
              <Device className="ta">
                <p>과목 홈</p>
                <LearnerSmartDiv ref={LearnerSmartDivTaRef}>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="icon-shortcuts"
                    title="퍼블 작업물 바로가기"
                    onClick={() => {
                      window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/lms/dashboard_subject.html');
                    }}
                  />
                  <Info>
                    <FontAwesomeIcon icon={faArrowsUpDown} />
                    Drag
                  </Info>
                  <LearnerSmartImg src={subjectImg} drag="y" dragConstraints={LearnerSmartDivTaRef} />
                </LearnerSmartDiv>
              </Device>
            </Spacing>
          </div>
          <div className="section sub-bg">
            <Title>
              <TitleH1 style={{ fontSize: size }} className="right">
                # Sub Page
              </TitleH1>
              <Text className="sub-txt">
                다양한 연령층의 사용자들이 보기에 어렵지 않고 익숙한 좌측 메뉴 구조를 채택하였습니다. <br className="mo-hide" />
                이미지와 텍스트를 전반적으로 키우고 여백을 활용하여 사용자로 하여금 시원한 느낌을 받을 수 있게 진행하였습니다. <br className="mo-hide" />
                브랜드 컬러가 들어간 일러스트 요소를 활용하여 정보 전달에도 정보전달도 보다 효과적으로 전달할 수 있게 디자인하였습니다.
              </Text>
            </Title>
            <ImgBox className="sub-map">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="item1 icon-shortcuts"
                title="퍼블 작업물 바로가기"
                onClick={() => {
                  window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/d_5_map.html');
                }}
              />
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="item2 icon-shortcuts"
                title="퍼블 작업물 바로가기"
                onClick={() => {
                  window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/info.html');
                }}
              />
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="item3 icon-shortcuts"
                title="퍼블 작업물 바로가기"
                onClick={() => {
                  window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/c_4_ui.html');
                }}
              />
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="item4 icon-shortcuts"
                title="퍼블 작업물 바로가기"
                onClick={() => {
                  window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/d_4_4_clean_room.html');
                }}
              />
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="item5 icon-shortcuts"
                title="퍼블 작업물 바로가기"
                onClick={() => {
                  window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/d_2_greetings.html');
                }}
              />
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="item6 icon-shortcuts"
                title="퍼블 작업물 바로가기"
                onClick={() => {
                  window.open('https://celinechoi.github.io/Publish-vsquare/hrdi/member_sign_up2.html');
                }}
              />
              <img src={sub} alt="작업 페이지 미리보기" />
            </ImgBox>
          </div>
        </Page>
      </PageFrame>
    </div>
  );
}
export default Hrdi;
