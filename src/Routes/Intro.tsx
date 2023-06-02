import styled from "styled-components";
import useCountUp from "../CountUp"
import {media} from '../style/media_query';

const Visual = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 30px;
	height: 550px;
	background-color: ${(props) => props.theme.bgColor.gray.first};
	${media.medium`
		height: 440px;
	`};
	>p {
		font-size: 44px;
		font-weight: 900;
		${media.medium`
			font-size: 36px;
		`};
		span {
			color: ${(props) => props.theme.point.yellow};
		}
	}
`;

function Intro(){
	return (
		<>
			<Visual>
				<p><span>{useCountUp(17)}</span>개의 프로젝트</p>
				<p><span>{useCountUp(7)}</span>년차</p>
				<p>UI/UX 개발자 최진슬 입니다.</p>
			</Visual>
		</>
	);
}
export default Intro;