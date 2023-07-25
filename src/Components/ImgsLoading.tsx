import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import styled, { keyframes } from "styled-components";

// keyframes
const slideKey = keyframes`
	0%, 100% {
		bottom: -35px;
	}
	25%, 75% {
		bottom: -2px;
	}
	20%, 80% {
		bottom: 2px;
	}
`;

const rotateKey = keyframes`
	0% {
		transform: rotate(-15deg);
	}
	25%, 75% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(25deg);
	}
`;

const Loader = styled.div`
	width: 64px;
  height: 64px;
  position: relative;
  background: ${props => props.theme.textColor.gray.first};
  border-radius: 4px;
  overflow: hidden;
	&::before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 40px;
		height: 40px;
		transform: rotate(45deg) translate(30%, 40%);
		background: ${props => props.theme.bgColor.gray.fourth};
		box-shadow: 32px -34px 0 5px ${props => props.theme.bgColor.gray.second};
		animation: ${slideKey} 2s infinite ease-in-out alternate;
	}
	&::after {
		content: "";
		position: absolute;
		left: 10px;
		top: 10px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: ${props => props.theme.bgColor.gray.second};
		transform: rotate(0deg);
		transform-origin: 35px 145px;
		animation: ${rotateKey} 2s infinite ease-in-out;
	}
`;

function ImgsLoading() {
	return (
		<Loader></Loader>
	);
}
export default ImgsLoading;