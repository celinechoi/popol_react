import styled from 'styled-components';
import { media } from 'style/media_query';
import { motion } from 'framer-motion';

export const Spacing = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  padding: 110px 32px 0;
  ${media.large`
    padding-top: 70px;
  `};
  ${media.medium`
    padding: 70px 24px 0;
  `};
  ${media.small`
    flex-direction: column;
    padding: 40px 20px 0;
    gap: 15px 0;
  `};
`;
export const CaptureMove = styled.div`
  overflow: hidden;
  border: 2px solid #000;
  background-color: #000;
  border-radius: 7px;
  > video {
    width: 100%;
  }
`;
export const Device = styled.div`
  overflow: hidden;
  flex-basis: calc(40% - 10px / 3 * 2);
  &.mo {
    flex-basis: calc(20% - 10px / 3 * 2);
    /* ${media.small`
			width: 35%;
		`}; */
  }
`;
export const DeviceName = styled.p`
  color: ${(props) => props.theme.textColor.gray.first};
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  width: 100%;
  padding: 0 12px 8px 0;
  opacity: 0.7;
`;
export const GridFrame = styled.div`
  flex: 0 0 auto;
`;

export const Grid = styled(motion.div)`
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(251, 234, 173, 0.7);
  border-radius: 7px;
  box-shadow: ${(props) => props.theme.shadow.box};
  cursor: pointer;
  max-height: 600px;
  &::-webkit-scrollbar {
    width: 8px;
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
  }
`;

export const Modal = styled.div`
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

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.4;
  z-index: -1;
`;

export const GridWhole = styled(motion.div)`
  width: 95%;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  /* ${media.medium`
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
	`};
  ${media.small`
		border-bottom-left-radius: 14px;
		border-bottom-right-radius: 14px;
	`}; */
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
export const GridBody = styled.div`
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

