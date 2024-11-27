import { useEffect, useState } from 'react';
import { focusHandler, resetHandler } from 'function/ModalScroll';

function Pad() {
  const [data, setData] = useState<any[]>();
  const [func, setFunc] = useState<any>({ on: null, off: null });
  useEffect(() => {
    // data
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

export default Pad;

