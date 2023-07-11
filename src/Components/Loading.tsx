import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components";

const LoadingBox = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-family: 'Righteous';
	font-weight: 500;
	text-align: center;
	>svg {
		margin-bottom: 7px;
		color: ${(props) => props.theme.bgColor.gray.fifth};
		font-size: 28px;
	}
`;

const Txt = styled.p`
	color: ${(props) => props.theme.bgColor.gray.fifth};
	font-size: 20px;
	text-align: center;
`;

function Loading({ name }: { name: string }) {

	return (
		<LoadingBox>
			<FontAwesomeIcon icon={faSpinner} spin />
			<Txt>{name} Loading ...</Txt>
		</LoadingBox>
	);
}
export default Loading;