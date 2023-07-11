import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components";

const InitializingBox = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-family: 'Righteous';
	font-weight: 500;
	text-align: center;
	>svg {
		margin-bottom: 12px;
		color: ${(props) => props.theme.textColor.gray.fourth};
		font-size: 44px;
		opacity: .5;
	}
`;

const Txt = styled.p`
	color: ${(props) => props.theme.textColor.gray.fourth};
	font-size: 32px;
	text-align: center;
	opacity: .8;
`;

function Initializing() {

	return (
		<InitializingBox>
			<FontAwesomeIcon icon={faCircleNotch} spin />
			<Txt>Initializing</Txt>
		</InitializingBox>
	);
}
export default Initializing;