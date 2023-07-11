import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { media } from "style/media_query";
import styled from "styled-components";

const TopBox = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	position: fixed;
	right: 48px;
	bottom: 70px;
	z-index: 10;
	width: 50px;
	height: 50px;
	box-shadow: ${(props) => props.theme.shadow.under};
	border: solid 1px #fafafa;
	border-radius: 50%;
	background-color: rgba(223, 223, 223, 0.1);
	text-align: center;
	cursor: pointer;
	&:hover,
	&:focus {
		background-color: rgba(255, 255, 255, 0.5);
	}
	${media.medium`
		right: 24px;
	`};
	${media.small`
		right: 20px;
	`};
	&.no {
		&-fixed {
			position: absolute;
			top: -188px;
		}
	}
	&.on {
		display: flex;
	}
`;

function Top() {
	const [ScrollY, setScrollY] = useState(0); // scrollY 값
	const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

	const handleFollow = () => {
		setScrollY(window.scrollY);
		// console.log(ScrollY);
		if (ScrollY > 100) {
			// 버튼 보임
			setBtnStatus(true);
		} else {
			// 버튼 사라짐
			setBtnStatus(false);
		}
	}

	const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		setScrollY(0);  // ScrollY 의 값을 초기화
		setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
	}

	useEffect(() => {
		const watch = () => {
			window.addEventListener('scroll', handleFollow)
		}
		watch();
		return () => {
			window.removeEventListener('scroll', handleFollow)
		}
	}, [ScrollY])
	return (
		<TopBox className={BtnStatus ? "on" : ""} onClick={handleTop}>
			<FontAwesomeIcon icon={faChevronUp} />
		</TopBox>
	);
}

export default Top;