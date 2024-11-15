import '../style/sub.scss';
import { useEffect, useState } from 'react';
import { focusHandler, resetHandler } from 'function/ModalScroll';

function Stove() {
  const [data, setData] = useState<any[]>();
  const [id, setId] = useState<null | string>(null);
  const [device, setDevice] = useState<null | number>(null);
  const [func, setFunc] = useState<any>({ on: null, off: null });
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      setFunc({ on: focusHandler, off: resetHandler });
    }
    return () => {
      isMount = false;
      setData([]);
      setFunc({});
    };
  }, []);
  return <div className="sub"></div>;
}

export default Stove;
