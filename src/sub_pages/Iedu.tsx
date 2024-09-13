import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { media } from 'style/media_query';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { focusHandler, resetHandler } from 'function/ModalScroll';
import tvcfInfo from 'img/sub_pages/iedu/tvcf_info.png';
import tvcfInfo2 from 'img/sub_pages/iedu/tvcf_info_v2.png';
import chance from 'img/sub_pages/iedu/chance.png';
import testStart from 'img/sub_pages/iedu/test_start.png';
import testStep1 from 'img/sub_pages/iedu/test_step1.png';
import testStep2 from 'img/sub_pages/iedu/test_step2.png';
import testStep3 from 'img/sub_pages/iedu/test_step3.png';
import testResult from 'img/sub_pages/iedu/test_result.png';
import viralStart from 'img/sub_pages/iedu/viral_test_start.png';
import viralLoading from 'img/sub_pages/iedu/viral_test_loading.png';
import viralStep1 from 'img/sub_pages/iedu/viral_test1.png';
import viralStep5 from 'img/sub_pages/iedu/viral_test5.png';
import viralResult1 from 'img/sub_pages/iedu/viral_result1.png';
import viralResult2 from 'img/sub_pages/iedu/viral_result2.png';
import viralResult3 from 'img/sub_pages/iedu/viral_result3.png';
import viralResult4 from 'img/sub_pages/iedu/viral_result4.png';
import renewalMain from 'img/sub_pages/iedu/renewal_main.png';
import learnerInfo from 'img/sub_pages/iedu/renewal_learner_info.png';

const ChildSection = styled.div`
  padding-top: 28px;
  ${media.medium`
		padding-top: 22px;
	`};
`;

const Grid = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 0 0 calc(100% / 3 - 12px / 3 * 2);
  min-height: 100px;
  max-height: 300px;
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

const GridZg = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: center;
  flex: 0 0 calc(100% / 4 - 12px / 4 * 3);
  min-height: 100px;
  max-height: 300px;
  overflow: hidden;
  background-color: rgba(251, 234, 173, 0.7);
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadow.box};
  cursor: pointer;
  ${media.small`
		flex-basis: calc(100%/2 - 12px/2*1);
	`};
  &.fifth {
    flex: 0 0 calc(100% / 5 - 12px / 5 * 4);
  }
  &:nth-child(even) {
    position: relative;
    top: 40px;
    ${media.small`
			top: 0;
		`};
  }
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
  height: calc(var(--vh, 1vh) * 80);
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

function Iedu() {
  // state
  const [data, setData] = useState<any[]>([]);
  const [test, setTest] = useState<any[]>([]);
  const [test2, setTest2] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>([]);
  const [id, setId] = useState<null | string>(null);
  const [func, setFunc] = useState<any>({ on: null, off: null });
  useEffect(() => {
    // data
    const imgArr = [tvcfInfo, tvcfInfo2, chance];
    const imgArr2 = [testStart, testStep1, testStep2, testStep3, testResult];
    const imgArr3 = [viralStart, viralLoading, viralStep1, viralStep5, viralResult1, viralResult2, viralResult3, viralResult4];
    const renewalArr = [renewalMain, learnerInfo];
    let isMount = true;
    if (isMount) {
      setData(imgArr);
      setTest(imgArr2);
      setTest2(imgArr3);
      setData2(renewalArr);
      setFunc({ on: focusHandler, off: resetHandler });
    }
    return () => {
      isMount = false;
      setData([]);
      setTest([]);
      setTest2([]);
      setData2([]);
      setFunc({});
    };
  }, []);
  return (
    <div className="sub">
      <section>
        <div className="sub-view">
          <div className="sub-view-title">
            <h3 className="page-h3">새로운 페이지</h3>
          </div>
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
        <ChildSection>
          <div className="sub-view">
            <div className="sub-view-title">
              <p className="txt-default">학부모 유형 검사 페이지</p>
            </div>
          </div>
          <div className="grids">
            {test2?.map((val: any, i: any) => (
              <GridZg
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
              </GridZg>
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
        </ChildSection>
        <ChildSection>
          <div className="sub-view">
            <div className="sub-view-title">
              <p className="txt-default">심리 테스트 페이지</p>
            </div>
          </div>
          <div className="grids">
            {test?.map((val: any, i: any) => (
              <GridZg
                className="fifth"
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
              </GridZg>
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
        </ChildSection>
      </section>
      <section className="section-v2">
        <div className="sub-view">
          <div className="sub-view-title">
            <h3 className="page-h3">리뉴얼 페이지</h3>
          </div>
        </div>
        <div className="grids">
          {data2?.map((val: any, i: any) => (
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
      </section>
    </div>
  );
}

export default Iedu;
