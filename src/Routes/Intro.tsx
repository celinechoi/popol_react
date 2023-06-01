import { useState } from "react";
import styled from "styled-components";

const Visual = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	>p {
		span {
			color: ${(props) => props.theme.point.yellow};
		}
	}
`;

function Intro(){
	return (
		<>
			<Visual>
				<p><span>19</span>개의 프로젝트</p>
				<p><span>7</span>년차</p>
				<p>UI/UX 개발자 최진슬 입니다.</p>
			</Visual>
		</>
	);
}
export default Intro;