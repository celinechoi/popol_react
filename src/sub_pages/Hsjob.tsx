import styled from "styled-components";
import main from "img/sub_pages/hsjob/index.png";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const PageFrame = styled.div`
	background-color: linear-gradient(135deg, #00BD99, #00C3ED);
`;

const Page = styled.div`
  
`;

const ScrollWindow = styled.div`
  overflow: hidden;
  position: relative;
  width: 60%;
  height: calc(36.25vw - 26px);
  border: 1px solid ${(props) => props.theme.borColor.gray.first};
  border-radius: 18px;
`;

const ScrollerMain = styled(motion.div)`
  display: block;
  width: 100%;
  height: 600px;
  background: rgba(255, 255, 255, 0.5);
  background: url(${main}) no-repeat center top / contain;
`;

// motion
const imgVariants = {
  start: {
    y: 0,
  },
  end: {
    y: -300,
    transition: {
      type: "spring",
      stiffness: 10,
      ease: "easeOut",
      delay: 1,
      repeat: Infinity,
      duration: 4,
    }
  }
}

function Hsjob() {
  // const y = useMotionValue(0);
  // // const transform = useTransform(y);
  // useEffect(()=> {
  //   y.onChange(() => console.log(y.get()));
  // }, [y]);
  const ScrollWindowInnerRef = useRef<HTMLDivElement>(null);
	return (
		<div className="sub">
			<PageFrame>
        <Page>
          <h3># Main</h3>
          <ScrollWindow ref={ScrollWindowInnerRef}>
            <ScrollerMain drag="y" dragConstraints={ScrollWindowInnerRef}
              onMeasureDragConstraints={console.log}></ScrollerMain>
          </ScrollWindow>
        </Page>
			</PageFrame>
		</div>
	);
}
export default Hsjob;