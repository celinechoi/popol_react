import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { media } from 'style/media_query';
import Radiation from 'sub_pages/Radiation';
import Acc from 'sub_pages/Acc';
import Mmca from 'sub_pages/Mmca';
import Bdna from 'sub_pages/Bdna';
import Lxproperty from 'sub_pages/Lxproperty';
import Gaon from 'sub_pages/Gaon';
import Cobe from 'sub_pages/Cobe';
import Iedu from 'sub_pages/Iedu';
import Hrdi from 'sub_pages/Hrdi';
import Hsjob from 'sub_pages/Hsjob';
import Itle from 'sub_pages/Itle';
import AiLemp from 'sub_pages/Ailemp';
import Vsquare from 'sub_pages/Vsquare';
// gravity
import Gstar from 'sub_pages/Gstar';
import Thero from 'sub_pages/Thero';
import Ros from 'sub_pages/Ros';
import Poringrush from 'sub_pages/Poringrush';
import Gravityofficial from 'sub_pages/Gravityofficial';
import Cho from 'sub_pages/Cho';
import Ro1mega from 'sub_pages/Ro1mega';
import Ro1vip from 'sub_pages/Ro1vip';
import Ro1winter from 'sub_pages/Ro1winter';
import Roball from 'sub_pages/Roball';
import Romtears from 'sub_pages/Romtears';
import Roosura from 'sub_pages/Roosura';
import Rooupdate from 'sub_pages/Rooupdate';
import Roz6th from 'sub_pages/Roz6th';

import ErrorPage from 'components/ErrorPage';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const SubPage = styled.div`
  position: relative;
  padding: 125px 0 80px;
  background-color: ${(props) => props.theme.bgColor.gray.second};
  ${media.small`
		padding-top: 155px;
	`};
`;

const BackBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  clear: both;
  width: 100%;
  padding-bottom: 48px;
  color: ${(props) => props.theme.textColor.gray.first};
  ${media.medium`
		padding-bottom: 40px;
	`};
  .inner {
    &-flex {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      > svg {
        width: 32px;
        padding-top: 6px;
        font-size: 24px;
      }
    }
  }
`;

const Indexs = styled.ul`
  display: flex;
  align-items: center;
  float: right;
  width: fit-content;
  margin-left: auto;
  > svg {
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
  padding: 22px 22px 40px;
  border: 1px solid ${(props) => props.theme.bgColor.gray.second};
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadow.under};
  ${media.medium`
		padding: 24px 20px;
		border-radius: 16px;
	`};
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 20px;
  ${media.medium`
		flex-direction: column;
		gap: 12px;
	`};
`;

const Tags = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  ${media.medium`
		width: 100%;
		flex-wrap: wrap;
    gap: 16px 12px;
	`};
  ${media.small`
		gap: 5px;
		justify-content: center;
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
  ${media.medium`
		padding: 0 8px;
    font-size: 12px;
	`};
  &.scss {
    background-color: #c66394;
    color: #fff;
  }
`;

const Img = styled.img`
  display: block;
  max-width: 200px;
  background-color: ${(props) => props.theme.bgColor.gray.fourth};
  padding: 8px 16px 12px;
  border-radius: 6px;
  ${media.small`
		max-width: 140px;
		margin: 0 auto;
	`};
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
  display: block;
  position: relative;
  background-color: ${(props) => props.theme.point.purple};
  border-radius: 6px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 50%;
  padding: 18px 32px;
  margin: 28px auto 0;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  overflow: hidden;
  &::before {
    content: '';
    background-color: #d6c5f0;
    width: 0;
    height: 100%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: -1;
    transition: height 700ms ease-in-out;
    display: inline-block;
  }
  &:hover {
    color: ${(props) => props.theme.point.purple};
    &::before {
      bottom: 0;
      height: 100%;
      border-radius: 6px;
    }
  }
  ${media.medium`
		padding: 16px 32px;
		font-size: 18px;
	`};
  ${media.small`
		width: 100%;
		padding: 12px 28px 14px;
    font-size: 16px;
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

const Effect = styled(motion.li)`
  flex: 1 1 calc(100% / 2 - 32px / 2 * 1);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  min-height: 80px;
  border-radius: 20px;
  padding: 16px 22px 16px 30px;
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
		padding: 16px;
		border-radius: 12px;
		flex-basis: 100%;
	`};
  &::before {
    content: '✅';
    display: inline-block;
    vertical-align: top;
    min-width: 22px;
    font-size: 17px;
  }
`;

const EffectItem = styled.span`
  display: inline-block;
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.point.green};
  text-decoration-thickness: 3px;
`;

const FocusArrow = styled.div`
  position: relative;
  width: 1rem;
  height: 5rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.point.beige};
  border-radius: 0.5rem;
  transform: rotate(90deg);
  ${media.medium`
		width: 1rem;
    height: 3.8rem;
	`};
  ${media.small` display: none; `};
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
    ${media.medium`
			top: 0.44rem;
			left: -1rem;
			width: 3.13rem;
			height: 2.9rem;
		`};
  }
`;

const WorkPages = styled.div`
  padding: 40px 0 0;
  color: ${(props) => props.theme.point.beige};
  text-align: center;
  ${media.medium`
		padding: 32px 0 0;
	`};
  ${media.small`
		padding: 24px 0 0;
	`};
  > p {
    font-size: 22px;
    font-weight: 700;
    opacity: 0.6;
  }
`;

// const Slider = styled.div`
// 	position: relative;
// 	height: 200px;
// `;

// const Row = styled(motion.div)`
// 	display: grid;
// 	grid-template-columns: repeat(6, 1fr);
// 	gap: 10px;
// 	position: absolute;
// 	width: 100%;
// `;

// const Box = styled(motion.div)`
// 	background-color: #fff;
// 	height: 200px;
// 	font-size: 22px;
// 	color: red;
// `;

// framer-motion

interface RouteState {
  parentPath: string | undefined;
  id: string;
  projectName: string;
  customer: string;
  fileUrl: string | undefined;
  pageImgs: [] | undefined;
  pagesMap: [] | undefined;
  description: string | undefined;
  did: [] | undefined;
  keyWords: [] | undefined;
  startYear: number | undefined;
  startMonth: number | undefined;
  endMonth: number | undefined;
  endYear: number | undefined;
}

// motion
const lineVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  hover: {},
};

function Sub() {
  // 현재 페이지 파악
  const { state } = useLocation<RouteState>();
  // 뒤로가기 구현
  const history = useHistory();
  const backFunc = () => {
    history.goBack();
  };

  // 배열 타입 빈 변수에 저장
  const keyWordsList: any = state?.keyWords;
  const didList: any = state?.did;
  useEffect(() => {}, []);
  return (
    <>
      {state?.parentPath ? (
        <SubPage>
          <div className="inner">
            <BackBox>
              <div className="inner-flex" onClick={backFunc}>
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                <p className="page-h2">Works</p>
              </div>
              <Indexs>
                <Index onClick={backFunc}>Works</Index>
                <FontAwesomeIcon icon={faChevronRight} />
                <Index onClick={backFunc}>{state.parentPath}</Index>
              </Indexs>
            </BackBox>
            <FrontInfo>
              <Flexbox>
                <Img src={state.fileUrl} alt={state.projectName} />
                <Tags>
                  {keyWordsList.map((val: any) => (
                    <Tag key={val} className={val === 'SCSS' ? 'scss' : ''}>
                      {val}
                    </Tag>
                  ))}
                </Tags>
              </Flexbox>
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
                    <dd>
                      {state.startYear}.{state.startMonth} ~ {state.endYear}.{state.endMonth}
                    </dd>
                  </dl>
                </Info>
              </Infos>
              {state.id === 'cobe' ? (
                <Button
                  onClick={() => {
                    window.open('https://cobemall.com/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'ailemp' ? (
                <Button
                  onClick={() => {
                    window.open('https://ailemp.vsquare.cc/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'hrdi' ? (
                <Button
                  onClick={() => {
                    window.open('https://hrdi.koreatech.ac.kr/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'hsjob' ? (
                <Button
                  onClick={() => {
                    window.open('https://job.hs.ac.kr/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'itle' ? (
                <Button
                  onClick={() => {
                    window.open('https://lms-itle.or.kr/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'nsu_beauty' ? (
                <Button
                  onClick={() => {
                    window.open('https://gr.nsu.ac.kr/kor/84/dept/0226');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'nsu_inno' ? (
                <Button
                  onClick={() => {
                    window.open('https://inno.nsu.ac.kr');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'vsquare_demo' ? (
                <Button
                  onClick={() => {
                    window.open('https://celinechoi.github.io/Publish-vsquare/demo/systems_guide.html');
                  }}
                >
                  System Kit Guide 바로가기
                </Button>
              ) : (
                ''
              )}
              {/* start gravity */}
              {state.id === 'thero' ? (
                <Button
                  onClick={() => {
                    window.open('https://theragnarok.gnjoy.com/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'ros' ? (
                <Button
                  onClick={() => {
                    window.open('https://ro.gnjoy.com/match/2024/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'poringrush' ? (
                <Button
                  onClick={() => {
                    window.open('https://poringrush.gnjoy.com/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {state.id === 'gravity_official' ? (
                <Button
                  onClick={() => {
                    window.open('https://www.gravity.co.kr/');
                  }}
                >
                  사이트 바로가기
                </Button>
              ) : (
                ''
              )}
              {/* end gravity */}
            </FrontInfo>
            <section className="section">
              <h2 className="section-title">특징</h2>
              <Effects>
                {didList.map((val: any) => (
                  <Effect key={val} variants={lineVariants} initial="start" animate="end">
                    <EffectItem>{val}</EffectItem>
                  </Effect>
                ))}
              </Effects>
              <FocusArrow />
              <WorkPages>
                <p>Preview</p>
                <h3 className="page-h2">Work Pages</h3>
              </WorkPages>
            </section>
            <section>
              {
                {
                  radiation: <Radiation />,
                  acc: <Acc />,
                  mmca: <Mmca />,
                  bdna: <Bdna />,
                  lxproperty: <Lxproperty />,
                  gaon: <Gaon />,
                  cobe: <Cobe />,
                  iedu: <Iedu />,
                  ailemp: <AiLemp />,
                  hrdi: <Hrdi />,
                  hsjob: <Hsjob />,
                  itle: <Itle />,
                  vsquare_demo: <Vsquare />,
                  gstar: <Gstar />,
                  thero: <Thero />,
                  ros: <Ros />,
                  poringrush: <Poringrush />,
                  gravity_official: <Gravityofficial />,
                  event_ro1_2: <Ro1vip />,
                  event_cho: <Cho />,
                  event_ro1: <Ro1winter />,
                  event_rob: <Roball />,
                  event_rom: <Romtears />,
                  event_roo_2: <Roosura />,
                  event_roo: <Rooupdate />,
                  event_roz: <Roz6th />,
                  event_ro1_3: <Ro1mega />,
                }[state.id]
              }
            </section>
          </div>
        </SubPage>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
export default Sub;

