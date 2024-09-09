import { media } from 'style/media_query';
import styled from 'styled-components';
import fullMp4 from 'img/sub_pages/gravity/gstar/2023/full.mp4';
import mainKo from 'img/sub_pages/gravity/gstar/2023/ko_main.webp';
import mainEn from 'img/sub_pages/gravity/gstar/2023/en_main.webp';
import mainKoMo from 'img/sub_pages/gravity/gstar/2023/ko_main_mo.webp';

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
  p {
    color: #a09d9d;
    font-size: 16px;
    font-weight: 700;
    text-align: right;
    width: 100%;
    padding: 0 12px 8px 0;
    opacity: 0.7;
  }
`;
const LearnerSmartImg = styled.img`
  width: 100%;
`;

function Gstar() {
  return (
    <div className="sub">
      <Spacing>
        <CaptureMove>
          <video muted autoPlay loop>
            <source type="video/mp4" src={fullMp4} />
          </video>
        </CaptureMove>
      </Spacing>
      <Spacing>
        <Device>
          <p>국문 사이트</p>
          <div>
            <LearnerSmartImg src={mainKo} />
          </div>
        </Device>
        <Device>
          <p>영문 사이트</p>
          <div>
            <LearnerSmartImg src={mainEn} />
          </div>
        </Device>
        <Device className="mo">
          <p>국문 사이트 (모바일)</p>
          <div>
            <LearnerSmartImg src={mainKoMo} />
          </div>
        </Device>
      </Spacing>
    </div>
  );
}

export default Gstar;

