import styled from "styled-components";
import main from "img/sub_pages/hsjob/index.png";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";

const PageFrame = styled(motion.div)`
  padding: 80px 32px 32px;
  border-radius: 20px;
	background: linear-gradient(135deg, #00BD99, #00C3ED);
`;

const Page = styled.div`
`;

const Title = styled.div`
  text-align: center;
`;

const TitleH1 = styled(motion.div)`
  font-size: 32px;
  font-weight: 700;
`;

const Text = styled(motion.div)`
  margin-top: 40px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
`;

const ScrollWindow = styled.div`
  overflow: hidden;
  position: relative;
  width: 750px;
  height: 420px;
  margin: 100px auto 0;
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
  const opacity = useTransform(scrollYProgress, [0,0.5,1], [0,1,0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.7, 0.9], [1, 2, 2.5, 2.8]);
  useEffect(()=> {
    scrollYProgress.onChange(() => {
      console.log(scrollYProgress.get());
    })
  }, []);

  
	return (
		<div className="sub">
			<PageFrame>
        <Page>
          <Title>
            <TitleH1 style={{ scale }}>Main</TitleH1>
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
        </Page>
			</PageFrame>
		</div>
	);
}
export default Hsjob;