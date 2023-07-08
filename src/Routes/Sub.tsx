import { Route, Switch, useHistory, useLocation, useParams, useRouteMatch, } from "react-router-dom";
import { TypesParams, WorkInterface } from "Routes/List";
import { useEffect, useState } from "react";
import { dbService } from "fbase";
import styled from "styled-components";
// import Ailemp from "./Ailemp";

const SubPage = styled.div`
	position: relative;
  padding: 80px 0;
`;

const FrointInfo = styled.div`
  padding: 20px 30px;
  border: 1px solid ${(props) => props.theme.bgColor.gray.third};
  border-radius: 20px;
`;

const Indexs = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding-bottom: 20px;
`;

const Index = styled.li`
  font-size: 13px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Infos = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
`;

const Info = styled.li`
  dl {
    display: flex;
    align-items: center;
    gap: 8px;
    dt {
      color: ${(props) => props.theme.textColor.gray.fourth};
    }
  }
`;

const PWiselinc = styled.div`
  padding-top: 30px;
`;

interface RouteState {
  parentPath: string;
  id: string;
  customer: string;
  projectName: string;
  fileUrl: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
}

function Sub() {
  // 현재 페이지 파악
  const { state } = useLocation<RouteState>();
  console.log(state);

  // 뒤로가기 구현
  let history = useHistory();
  const backFunc = () => {
    history.goBack();
  }

	return (
    <SubPage>
      <div className="inner">
        <Indexs>
          <Index onClick={backFunc}>Works</Index>
          <Index>{state.parentPath}</Index>
        </Indexs>
        <FrointInfo>
          <Title>[{state.customer}] {state.projectName}</Title>
          <Infos>
            <Info>
              <dl>
                <dt>프로젝트 기간</dt>
                <dd>{state.startYear}.{state.startMonth} ~ {state.endYear}.{state.endMonth}</dd>
              </dl>
            </Info>
          </Infos>
          <div>프로젝트 설명 데이터 넣기</div>
        </FrointInfo>
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