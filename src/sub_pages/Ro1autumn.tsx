import { AnimatePresence } from 'framer-motion';
import { Spacing, CaptureMove, DeviceName, GridFrame, Grid, Modal, Overlay, GridWhole, GridBody, overlay, girdVariants } from 'js/styled.js';
import '../style/sub.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import fullMp4 from 'img/sub_pages/gravity/ros/full.mp4';
import mainKo from 'img/sub_pages/gravity/ros/page.webp';
import mainMo from 'img/sub_pages/gravity/ros/page_mo.webp';
import { useEffect, useState } from 'react';
import { focusHandler, resetHandler } from 'function/ModalScroll';

function Ro1autumn() {
  const [data, setData] = useState<any[]>();
  const [id, setId] = useState<null | string>(null);
  const [device, setDevice] = useState<null | number>(null);
  const [func, setFunc] = useState<any>({ on: null, off: null });
  useEffect(() => {
    // data
    const imgArr = [mainKo, mainMo];
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
        <DeviceName>인터렉션 영상</DeviceName>
        <CaptureMove>
          <video muted autoPlay loop>
            <source type="video/mp4" src={fullMp4} />
          </video>
        </CaptureMove>
      </div>
      <Spacing>
        {data?.map((val: any, i: any) => (
          <GridFrame key={i} style={{ width: i == 0 ? '49%' : '30%' }}>
            <DeviceName>{i == 0 ? 'PC' : 'Mobile'}</DeviceName>
            <Grid
              layoutId={i}
              onClick={() => {
                setId(val);
                setDevice(i);
                func.on();
              }}
              variants={girdVariants}
              initial="start"
              whileHover="hover"
            >
              <img src={val} alt="작업물 이미지" />
            </Grid>
          </GridFrame>
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
            <GridWhole layoutId={id} style={{ width: device == 1 ? '35%' : '' }}>
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

export default Ro1autumn;
