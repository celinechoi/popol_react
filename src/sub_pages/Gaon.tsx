import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { media } from 'style/media_query';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import login from 'img/sub_pages/gaon/login.jpg';
import main from 'img/sub_pages/gaon/main.jpg';
import sub1 from 'img/sub_pages/gaon/sub1-1.jpg';
import sub2 from 'img/sub_pages/gaon/sub2-1.jpg';
import sub3 from 'img/sub_pages/gaon/sub3-1.jpg';
import sub4 from 'img/sub_pages/gaon/sub4-1.jpg';
import { focusHandler, resetHandler } from 'function/ModalScroll';

const Grid = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
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
    border-radius: 6px;
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

function Gaon() {
  // state
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState<null | string>(null);
  const [func, setFunc] = useState<any>({ on: null, off: null });
  useEffect(() => {
    // data
    const imgArr = [login, main, sub1, sub2, sub3, sub4];
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
        <div className="sub-view">
          <div className="sub-view-title"></div>
        </div>
        <div className="grids">
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
              <img src={val} alt="작업물 이미지" />
            </Grid>
          ))}
        </div>
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
    </div>
  );
}

export default Gaon;
