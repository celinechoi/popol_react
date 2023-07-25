import styled, { keyframes } from "styled-components";

// keyframes
const spinnerKey = keyframes`
	to {
    transform: rotate(360deg);
	}
`;

const IntialBoxes = styled.div`
	position: absolute;
	z-index: 5;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
	justify-content: center;
`;

const InitializingBox = styled.div`
	background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 250px;
  height: 250px;
  animation: ${spinnerKey} 1.7s linear infinite;
  text-align: center;
  border-radius: 50%;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
`;

const Spinner = styled.div`
	background-color: rgb(36, 36, 36);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  filter: blur(10px);
`;

const Txt = styled.p`
	position: absolute;
	z-index: 5;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: ${(props) => props.theme.textColor.gray.fourth};
	font-size: 32px;
	text-align: center;
`;

function Initializing() {
	return (
		<div className="dim">
			<IntialBoxes>
				<InitializingBox>
					<Spinner></Spinner>
				</InitializingBox>
				<Txt>Initializing</Txt>
			</IntialBoxes>
		</div>
	);
}
export default Initializing;