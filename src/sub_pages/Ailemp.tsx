import styled from "styled-components";
import main from "img/sub_pages/ailemp/index.png";
import { useEffect, useRef } from "react";

const PageFrame = styled.div`
	background-color: linear-gradient(135deg, #00BD99, #00C3ED);
`;

const Page = styled.div`
  
`;

const ScrollWindow = styled.div`
  width: 60%;
  height: calc(56.25vw - 26px);
  border: 1px solid ${(props) => props.theme.borColor.gray.first};
  border-radius: 18px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const ScrollWindowInner = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

function Ailemp() {
  const windowRef = useRef<HTMLDivElement>(null);
  const widnwInnerRef = useRef<HTMLImageElement>(null);
  useEffect(()=>{
    console.log(windowRef.current?.offsetHeight || 0);
    console.log(widnwInnerRef.current?.offsetHeight || 0);
  }, []);
  
	return (
		<div className="sub">
			<PageFrame>
        <Page>
          <h3># Main</h3>
          <ScrollWindow ref={windowRef}>
            <ScrollWindowInner>
              <Img src={main} alt="메인페이지" ref={widnwInnerRef} />
            </ScrollWindowInner>
          </ScrollWindow>
        </Page>
			</PageFrame>
		</div>
	);
}
export default Ailemp;