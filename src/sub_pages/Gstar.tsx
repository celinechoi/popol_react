import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { media } from 'style/media_query';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowsUpDown, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import clipIcon from 'img/sub_pages/ailemp/clip_icon.png';
import full from 'img/sub_pages/gravity/gstar/2023/full.gif';
import mainKo from 'img/sub_pages/gravity/gstar/2023/ko_main.webp';
import mainEn from 'img/sub_pages/gravity/gstar/2023/en_main.webp';
import mainKoMo from 'img/sub_pages/gravity/gstar/2023/ko_main_mo.webp';

const Info = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  ${media.small`
		padding: 9px;
		border-radius: 5px;
		font-size: 0;
	`};
  > svg {
    width: 32px;
    height: 32px;
    margin: 0 auto 8px;
    ${media.small`
			width: 18px;
			height: 18px;
			margin: 0 auto;
		`};
  }
`;
const Spacing = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding: 110px 32px 0;
  ${media.large`
    padding-top: 70px;
  `};
  ${media.medium`
    gap: 24px 0;
    padding: 70px 24px 0;
  `};
  ${media.small`
    gap: 20px 0;
    padding: 40px 20px 0;
  `};
`;
const Device = styled.div`
  overflow: hidden;
  width: 45%;
  ${media.medium`
		width: 100%;
	`};
  &.ta {
    width: 30%;
    ${media.medium`
			width: 60%;
		`};
  }
  &.mo {
    width: 20%;
    ${media.medium`
			width: 30%;
		`};
    ${media.small`
			width: 35%;
		`};
  }
  p {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    text-align: right;
    width: 100%;
    padding: 0 12px 8px 0;
    opacity: 0.7;
  }
`;
const LearnerSmartDiv = styled(motion.div)`
  overflow-y: auto;
  position: relative;
  width: 100%;
  min-height: 800px;
  max-height: 812px;
  border: 2px solid #000;
  border-radius: 20px;
  // cursor: grab;
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #feae6a; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(255, 220, 163, 0.9); /*스크롤바 뒷 배경 색상*/
  }
  &:after {
    clear: both;
    display: block;
    content: '';
  }
  ${media.large`
		min-height: 600px;
	`};
  ${media.medium`
		min-height: 450px;
		border-radius: 16px;
	`};
  ${media.small`
		min-height: 350px;
		border-radius: 12px;
	`};
  ${media.smallToo`
		min-height: 170px;
	`};
`;
const LearnerSmartImg = styled(motion.img)`
  width: 100%;
`;

function Gstar() {
  // sub drag
  const LearnerSmartDivRef = useRef<HTMLDivElement>(null);
  const LearnerSmartDivTaRef = useRef<HTMLDivElement>(null);
  const LearnerSmartDivMoRef = useRef<HTMLDivElement>(null);
  return (
    <div className="sub">
      <Spacing></Spacing>
      <Spacing>
        <Device>
          <p>PC</p>
          <LearnerSmartDiv ref={LearnerSmartDivRef}>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="icon-shortcuts"
              title="퍼블 작업물 바로가기"
              onClick={() => {
                window.open('https://celinechoi.github.io/Publish-vsquare/ailemp/learner-report-smart.html');
              }}
            />
            <LearnerSmartImg src={mainKo} />
          </LearnerSmartDiv>
        </Device>
        <Device className="ta">
          <p>Tablet</p>
          <LearnerSmartDiv ref={LearnerSmartDivTaRef}>
            <LearnerSmartImg src={mainEn} />
          </LearnerSmartDiv>
        </Device>
        <Device className="mo">
          <p>Mobile</p>
          <LearnerSmartDiv ref={LearnerSmartDivMoRef}>
            <LearnerSmartImg src={mainKoMo} />
          </LearnerSmartDiv>
        </Device>
      </Spacing>
    </div>
  );
}

export default Gstar;
