import { Route, Switch, useHistory, useLocation, useParams, useRouteMatch, } from "react-router-dom";
import { useEffect, useState } from "react";
import { dbService } from "fbase";
import styled from "styled-components";
// import Ailemp from "./Ailemp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { media } from "style/media_query";

const SubPage = styled.div`
	position: relative;
  padding: 125px 0 80px;
	${media.small`
		padding-top: 155px;
	`};
`;

const BackBox = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	clear: both;
	width: fit-content;
	padding-bottom: 48px;
	color: ${(props) => props.theme.textColor.gray.first};
	cursor: pointer;
	${media.medium`
		padding-bottom: 40px;
	`};
	>svg {
		width: 32px;
		padding-top: 6px;
		font-size: 24px;
	}
`;

const Indexs = styled.ul`
  display: flex;
  align-items: center;
  float: right;
	width: fit-content;
  padding-bottom: 20px;
	>svg {
		width: 24px;
		padding-top: 3px;
		color: ${(props) => props.theme.bgColor.gray.fifth};
		font-size: 12px;
	}
`;

const Index = styled.li`
	color: ${(props) => props.theme.textColor.gray.third};
  font-size: 14px;
	cursor: pointer;
`;

const FrontInfo = styled.div`
	overflow: hidden;
  padding: 32px 32px 40px;
  border: 1px solid ${(props) => props.theme.bgColor.gray.second};
  border-radius: 20px;
	box-shadow: ${(props) => props.theme.shadow.under};
	${media.medium`
		padding: 24px 20px;
		border-radius: 16px;
	`};
`;

const Tags = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 12px;
	padding-bottom: 20px;
	${media.smallToo`
		flex-wrap: wrap;
	`};
`;

const Tag = styled.li`
	min-width: 54px;
  padding: 0 12px;
	background-color: ${(props) => props.theme.bgColor.gray.first};
  border-radius: 18px;
	font-size: 13px;
	line-height: 32px;
	text-align: center;
	cursor: default;
	${media.smallToo`
		padding: 0 8px;
    font-size: 12px;
	`};
	&.scss {
		background-color: #C66394;
		color: #fff;
	}
`;

const Img = styled.img`
	display: block;
	max-width: 200px;
	margin: 0 auto 12px;
	background-color: rgba(78, 78, 78, 0.7);
	padding: 8px 16px 12px;
	border-radius: 6px;
`;

const Title = styled.h2`
	.page {
		&-h1 {
			padding-bottom: 18px;
			text-align: center;
		}
	}
`;

const Description = styled.p`
	width: 70%;
	margin: 0 auto;
	font-size: 20px;
	font-weight: 500;
	text-align: center;
	${media.medium`
		font-size: 18px;
	`};
	${media.small`
		width: 100%;
	`};
`;

const Infos = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
	padding-top: 20px;
	${media.medium`
		gap: 28px;
	`};
	${media.smallToo`
		flex-direction: column;
		gap: 4px 8px;
	`};
`;

const Info = styled.li`
  dl {
    display: flex;
    align-items: center;
    gap: 28px;
		${media.medium`
			gap: 24px;
		`};
		dt,
		dd {
			font-size: 16px;
			${media.medium`
				font-size: 14px;
			`};
		}
    dt {
      color: ${(props) => props.theme.textColor.gray.fifth};
    }
		dd {
			color: ${(props) => props.theme.textColor.gray.third};
			font-weight: 500;
		}
  }
`;

const Button = styled.button`
	float: right;
	margin-top: 20px;
	padding: 12px 20px;
	background-color: ${(props) => props.theme.point.blue[0]};
	color: #fff;
	&:hover {
		box-shadow: ${(props) => props.theme.shadow.button};
	}
	${media.small`
		float: none;
		width: 100%;
	`};
`;

const Effects = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;
	gap: 24px 32px;
	padding: 24px;
	border-radius: 20px;
	background-color: ${(props) => props.theme.point.beige};
	${media.medium`
		gap: 20px;
		padding: 20px;
		border-radius: 16px;
	`};
	${media.small`
		flex-direction: column;
		gap: 16px;
		padding: 16px;
		border-radius: 12px;
	`};
`;

const Effect = styled.li`
	flex: 1 1 calc(100%/2 - 32px/2*1);
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 80px;
	border-radius: 20px;
	padding: 16px 32px;
	background-color: rgba(250, 250, 250, 0.6);
	color: #000;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.7;
	text-align: center;
	${media.medium`
		min-height: 60px;
		padding: 18px;
		border-radius: 16px;
		font-size: 16px;
	`};
	${media.small`
		border-radius: 12px;
		flex-basis: 100%;
	`};
`;

const FocusArrow = styled.div`
	position: relative;
	width: 1rem;
	height: 5rem;
	margin: 0 auto;
	background-color: ${(props) => props.theme.point.beige};;
	border-radius: 0.5rem;
	transform: rotate(90deg);
	${media.small`
		width: 1rem;
    height: 3.8rem;
	`};
	&::after {
		content: '';
		top: 0.6rem;
		left: -1.2rem;
		width: 3.725rem;
		height: 3.725rem;
		background-color: ${(props) => props.theme.point.beige};
		border-radius: 0.6rem;
		clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
		position: absolute;
		transform: rotate(45deg);
		${media.small`
			top: 0.44rem;
			left: -1rem;
			width: 3.13rem;
			height: 2.9rem;
		`};
	}
`;

const PWiselinc = styled.div`
  padding-top: 30px;
`;

interface RouteState {
	parentPath: string;
	id: string;
	projectName: string;
	customer: string;
	description: string;
	did: [] | undefined;
	keyWords: [] | undefined,
	fileUrl: string;
	startYear: number;
	startMonth: number;
	endYear: number;
	endMonth: number;
}

function Sub() {
	// 현재 페이지 파악
	const { state } = useLocation<RouteState>();
	// console.log(state);

	// 뒤로가기 구현
	let history = useHistory();
	const backFunc = () => {
		history.goBack();
	}

	// 배열 타입 빈 배열 변수에 저장
	let keyWordsList: any = [];
	keyWordsList = state?.keyWords;
	let didList: any = [];
	didList = state?.did;
	return (
		<SubPage>
			<div className="inner">
				<Indexs>
					<Index onClick={backFunc}>Works</Index>
					<FontAwesomeIcon icon={faChevronRight} />
					<Index onClick={backFunc}>{state.parentPath}</Index>
				</Indexs>
				<BackBox onClick={backFunc}>
					<FontAwesomeIcon icon={faChevronLeft} size="lg" />
					<p className="page-h2">Works</p>
				</BackBox>
				<FrontInfo>
					<Tags>
						{
							keyWordsList.map((val: any) => (
								<Tag key={val} className={val === "SCSS" ? "scss" : ""}>
									{val}
								</Tag>
							))
						}
					</Tags>
					<Img src={state.fileUrl} alt={state.projectName} />
					<Title>
						<div className="page-h1">{state.projectName}</div>
					</Title>
					<Description>{state.description}</Description>
					<Infos>
						<Info>
							<dl>
								<dt>고객사</dt>
								<dd>{state.customer}</dd>
							</dl>
						</Info>
						<Info>
							<dl>
								<dt>기간</dt>
								<dd>{state.startYear}.{state.startMonth} ~ {state.endYear}.{state.endMonth}</dd>
							</dl>
						</Info>
					</Infos>
					{state.id === "cobe" ? <Button onClick={() => { window.open("https://cobemall.com/") }}>사이트 바로가기</Button> : ""}
					{state.id === "ailemp" ? <Button onClick={() => { window.open("https://ailemp.vsquare.cc/page/home") }}>사이트 바로가기</Button> : ""}
					{state.id === "hrdi" ? <Button onClick={() => { window.open("https://hrdi.koreatech.ac.kr/") }}>사이트 바로가기</Button> : ""}
					{state.id === "hsjob" ? <Button onClick={() => { window.open("https://job.hs.ac.kr/") }}>사이트 바로가기</Button> : ""}
					{state.id === "itle" ? <Button onClick={() => { window.open("https://lms-itle.or.kr/") }}>사이트 바로가기</Button> : ""}
					{state.id === "nsu_beauty" ? <Button onClick={() => { window.open("https://gr.nsu.ac.kr/kor/84/dept/0226") }}>사이트 바로가기</Button> : ""}
					{state.id === "nsu_inno" ? <Button onClick={() => { window.open("https://inno.nsu.ac.kr") }}>사이트 바로가기</Button> : ""}
				</FrontInfo>
				<section className="section">
					<h2 className="section-title">기여한 역할</h2>
					<Effects>
						{
							didList.map((val: any) => (
								<Effect key={val}>
									{val}
								</Effect>
							))
						}
					</Effects>
					<FocusArrow>

					</FocusArrow>
				</section>
				{
					state.id === "wiselinc" ?
						(
							<PWiselinc>
								<p>경남대입니다.</p>
							</PWiselinc>
						) : ("")
				}
			</div>
		</SubPage>
	);
}
export default Sub;