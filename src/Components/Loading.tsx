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

const LoadingBox = styled.div`
	background-image: ${props => props.theme.gradient.second};
  width: 250px;
  height: 250px;
  animation: ${spinnerKey} 1.7s linear infinite;
  text-align: center;
  border-radius: 50%;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgba(228, 19, 141, 0.925), 0px 5px 20px 0px rgb(255, 179, 80);
`;

const Spinner = styled.div`
	background-color: ${(props) => props.theme.bgColor.gray.second};
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
	width: 100%;
	color: ${(props) => props.theme.textColor.gray.fourth};
	font-size: 28px;
	text-align: center;
`;

function Loading({ prop }: { prop: string | undefined }) {
	return (
		<div className="dim">
			<IntialBoxes>
				<LoadingBox>
					<Spinner></Spinner>
				</LoadingBox>
				<Txt>{prop} ...</Txt>
			</IntialBoxes>
		</div>
	);
}
export default Loading;