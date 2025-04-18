﻿import { AnimatePresence } from 'framer-motion';
import { Spacing, DeviceName, GridFrame, Grid, Modal, Overlay, GridWhole, GridBody, overlay, girdVariants } from 'js/styled.js';
import '../style/sub.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import mainKo from 'img/sub_pages/gravity/event/roz_may/page.webp';
import { useEffect, useState } from 'react';
import { focusHandler, resetHandler } from 'function/ModalScroll';

function Rosmay() {
  const [data, setData] = useState<any[]>();
  const [id, setId] = useState<null | string>(null);
  const [device, setDevice] = useState<null | number>(null);
  const [func, setFunc] = useState<any>({ on: null, off: null });
  useEffect(() => {
    // data
    const imgArr = [mainKo];
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
      <Spacing>
        {data?.map((val: any, i: any) => (
          <GridFrame key={i} className={i === 0 ? 'first' : 'second'}>
            <DeviceName>{i === 0 ? 'PC' : 'Mobile'}</DeviceName>
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
            <GridWhole layoutId={id} style={{ width: device === 1 ? '35%' : '' }}>
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

export default Rosmay;

