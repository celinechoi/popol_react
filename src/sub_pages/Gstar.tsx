import { media } from 'style/media_query';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import fullMp4 from 'img/sub_pages/gravity/gstar/2023/full.mp4';
import mainKo from 'img/sub_pages/gravity/gstar/2023/ko_main.webp';
import mainEn from 'img/sub_pages/gravity/gstar/2023/en_main.webp';
import mainKoMo from 'img/sub_pages/gravity/gstar/2023/ko_main_mo.webp';
import { useEffect, useState } from 'react';
import { focusHandler, resetHandler } from 'function/ModalScroll';

const Spacing = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  padding: 110px 32px 0;
  ${media.large`
    padding-top: 70px;
  `};
  ${media.medium`
  flex-direction: column;
    gap: 24px 0;
    padding: 70px 24px 0;
  `};
  ${media.small`
    gap: 20px 0;
    padding: 40px 20px 0;
  `};
`;
const CaptureMove = styled.div`
  overflow: hidden;
  border: 2px solid #000;
  background-color: #000;
  > video {
    width: 100%;
  }
`;
const Device = styled.div`
  overflow: hidden;
  flex-basis: calc(40% - 10px / 3 * 2);
  &.mo {
    flex-basis: calc(20% - 10px / 3 * 2);
    /* ${media.small`
			width: 35%;
		`}; */
  }
`;
const DeviceName = styled.p`
  color: #a09d9d;
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  width: 100%;
  padding: 0 12px 8px 0;
  opacity: 0.7;
`;
const LearnerSmartImg = styled.img`
  width: 100%;
`;
const Grid = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 0 0 calc(100% / 3 - 12px / 3 * 2);
  min-height: 100px;
  overflow: hidden;
  background-color: rgba(251, 234, 173, 0.7);
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadow.box};
  cursor: pointer;
  ${media.large`
		flex-basis: calc(100%/2 - 12px/2*1);
	`};
  ${media.small`
		flex-basis: 100%;
	`};
  > img {
    width: 100%;
  }
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  height: calc(var(--vh, 1vh) * 100);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.4;
  z-index: -1;
`;

const GridWhole = styled(motion.div)`
  width: 95%;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  ${media.medium`
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
	`};
  ${media.small`
		border-bottom-left-radius: 14px;
		border-bottom-right-radius: 14px;
	`};
  > svg {
    position: absolute;
    right: 20px;
    top: 16px;
    width: 22px;
    height: 22px;
    padding: 10px;
    border-radius: 50%;
    background-color: rgba(66, 66, 66, 0.6);
    color: #fff;
    cursor: pointer;
  }
`;
const GridBody = styled.div`
  height: calc(var(--vh, 1vh) * 82);
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #807d7d;
    border-radius: 6px;
    border: 6px solid #fbeaad;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(128, 125, 125, 0.9);
  }
  > img {
    display: block;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    ${media.medium`
			border-bottom-left-radius: 16px;
			border-bottom-right-radius: 16px;
		`};
    ${media.small`
			border-bottom-left-radius: 14px;
			border-bottom-right-radius: 14px;
		`};
  }
`;
// motion
const overlay = {
  hidden: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  visible: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};

const girdVariants = {
  start: {
    border: '3px solid transparent',
  },
  hover: {
    borderColor: '#ffcc42',
    y: -20,
    scale: 1.05,
  },
};

function Gstar() {
  const [data, setData] = useState<any[]>();
  const [id, setId] = useState<null | string>(null);
  const [func, setFunc] = useState<any>({ on: null, off: null });
  useEffect(() => {
    // data
    const imgArr = [mainKo, mainEn, mainKoMo];
    let isMount = true;
    if (isMount) {
      setData(imgArr);
      setFunc({ on: focusHandler, off: resetHandler });
    }
    return () => {
      isMount = false;
      setData([]);
      setFunc({});
    };
  }, []);
  return (
    <div className="sub">
      <div>
        <DeviceName>미리보기</DeviceName>
        <CaptureMove>
          <video muted autoPlay loop>
            <source type="video/mp4" src={fullMp4} />
          </video>
        </CaptureMove>
      </div>
      <Spacing>
        {data?.map((val: any, i: any) => (
          <Grid
            key={i}
            layoutId={i}
            onClick={() => {
              setId(val);
              func.on();
            }}
            variants={girdVariants}
            initial="start"
            whileHover="hover"
          >
            {i == 0 ? <DeviceName>국문 페이지 (PC)</DeviceName> : ''}
            {i == 1 ? <DeviceName>영문 페이지 (PC)</DeviceName> : ''}
            {i == 2 ? <DeviceName>국문 페이지 (MO)</DeviceName> : ''}
            <img src={val} alt="작업물 이미지" />
          </Grid>
        ))}
      </Spacing>
      <AnimatePresence>
        {id ? (
          <Modal>
            <Overlay
              variants={overlay}
              onClick={() => {
                setId(null);
                func.off();
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            <GridWhole layoutId={id}>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => {
                  setId(null);
                  func.off();
                }}
              />
              <GridBody>
                <img src={id} alt="작업물 이미지" />
              </GridBody>
            </GridWhole>
          </Modal>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Gstar;
