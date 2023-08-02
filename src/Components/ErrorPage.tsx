import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { media } from "style/media_query";
import styled from "styled-components";

const ErrorFrame = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  height: calc(var(--vh,1vh)*100 - 109px - 86px);
	margin-top: 86px;
	text-align: center;
	${media.smallToo`
		height: calc(var(--vh,1vh)*100 - 104px - 145px);
		margin-top: 145px;
	`};
	${media.micro`
		height: calc(var(--vh,1vh)*100 - 104px);
	`};
	.page {
		&-h2 {
			color: ${props => props.theme.point.hotPink};
		}
	}
	.txt {
		&-default {
			padding-top: 20px;
			font-weight: 900;
		}
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 170px;
	height: 170px;
	border-radius: 50%;
	background: ${props => props.theme.point.hotPink};
	padding: 20px;
	margin-bottom: 22px;
	${media.medium`
		width: 140px;
    height: 140px;
	`};
	${media.small`
		width: 100px;
		height: 100px;
	`};
	.icon {
		&-caution {
			color: #fff;
			font-size: 124px;
			${media.medium`
				font-size: 94px;
			`};
			${media.small`
				font-size: 44px;
			`};
		}
	}
`;

const Button = styled.button`
	display: inline-flex;
  align-items: center;
  justify-content: center;
	min-width: 200px;
  padding: 15px 30px;
  border: 0;
  position: relative;
	z-index: 0;
  overflow: hidden;
  border-radius: 10rem;
	margin-top: 40px;
	font-size: 16px;
  font-weight: 900;
  background-image: ${props => props.theme.gradient.first};
	background-size: 100%;
	background-repeat: no-repeat;
	color: #fff;
  z-index: 0;
  box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
	&:hover {
  background: rgb(193, 228, 248);
  color: ${props => props.theme.point.skyblue};

}
&:active {
  transform: scale(0.97);
}
`;

function ErrorPage() {
	return (
		<>
			<ErrorFrame>
				<Icon>
					<FontAwesomeIcon icon={faExclamation} className="icon-caution" />
				</Icon>
				<p className="page-h2">잘못된 경로입니다.</p>
				<p className="txt-default">하단의 버튼을 눌러 홈으로 이동하시거나 <br />상단 Home를 눌러 이동해주세요.</p>
				<Button>
					<Link to="/">홈으로</Link>
				</Button>
			</ErrorFrame >
		</>
	);
}

export default ErrorPage;