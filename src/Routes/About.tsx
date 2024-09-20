import styled, { keyframes } from 'styled-components';
import heart from 'img/emoji/heart.png';
import Chart from 'react-apexcharts';
import { useEffect, useRef, useState } from 'react';
import Loading from 'components/Loading';
import { media } from 'style/media_query';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import coworkBg from 'img/cowork_bg.png';
import intellij from 'img/logo/intellij_logo.png';
import vscode from 'img/logo/vscode_logo.png';
import github from 'img/logo/github_logo.png';
import photoshop from 'img/logo/photoshop_logo.svg';
import zeplin from 'img/logo/zeplin_logo.svg';
import slack from 'img/logo/slack_logo.svg';
import notion from 'img/logo/notion_logo.png';
import asana from 'img/logo/asana_logo.svg';
import jira from 'img/logo/jira_logo.svg';
import dooray from 'img/logo/dooray_logo.svg';

// keyframes
const borderKey = keyframes`
	0% {
		background-position: 0 0;
	}
	50% {
		background-position: 400% 0;
	}
	100% {
		background-position: 0 0;
	}
`;

const Content = styled.div`
  padding-top: 40px;
`;

const Profile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  z-index: 0;
`;

const ImgFrame = styled.div`
  overflow: hidden;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgBox = styled(motion.div)`
  position: relative;
  border-radius: 50%;
  width: 146px;
  height: 146px;
  padding: 12px;
  background: ${(props) => props.theme.bgColor.gray.first};
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -4px;
    top: -4px;
    overflow: hidden;
    border-radius: 50%;
    background: linear-gradient(90deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
    background-size: 400%;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    z-index: -1;
    animation: ${borderKey} 20s linear infinite;
  }
  &::after {
    filter: blur(50px);
  }
`;

const Img = styled(motion.img)`
  width: 100%;
`;

const Txt = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const Dl = styled.dl`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding-top: 10px;
`;

const Dt = styled.dt`
  position: relative;
  color: ${(props) => props.theme.textColor.gray.fifth};
  font-size: 14px;
  &::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 10px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.textColor.gray.fifth};
  }
`;

const Dd = styled.dd`
  color: ${(props) => props.theme.textColor.gray.first};
  font-size: 14px;
  font-weight: 700;
`;

const GridTop = styled.div`
  margin-bottom: 32px;
  padding: 24px 18px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor.gray.first};
  border: 1px solid ${(props) => props.theme.borColor.gray.first};
`;

const Grids = styled.div`
  display: flex;
  gap: 24px 32px;
  ${media.medium`
		flex-direction: column;
		gap: 22px;
	`};
`;

const Grid = styled(motion.div)`
  flex: 1 1 calc(100% / 2 - 32px / 2 * 1);
  /* height: 428px; */
  height: auto;
  min-height: 400px;
  padding: 20px;
  border-radius: 20px;
  &.chart {
    &-area {
      padding: 0;
    }
  }
  &.second {
    background-color: ${(props) => props.theme.bgColor.gray.fifth};
  }
  &.cowork {
    position: relative;
    z-index: 0;
    overflow: hidden;
    height: 460px;
    ${media.large`
			height: 420px;
		`};
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: url(${coworkBg}) no-repeat center top / cover;
      opacity: 0.6;
      ${media.medium`
				background-position: center center;
			`};
    }
  }
  &.interest {
    background-color: ${(props) => props.theme.bgColor.gray.first};
    height: 460px;
    ${media.large`
			height: 420px;
		`};
  }
  ${media.medium`
		flex-basis: 100%;
	`};
`;

const Title = styled.p`
  margin-bottom: 32px;
  color: ${(props) => props.theme.textColor.gray.first};
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  ${media.large`
		margin-bottom: 24px;
	`};
  ${media.medium`
		font-size: 20px;
	`};
`;

const Plugins = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Plugin = styled(motion.li)`
  position: relative;
  border-radius: 30px;
`;

const PluginTitle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 50%;
  border: 1px solid #ff8e22;
  background-color: #ff8e22;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  color: #fff9f1;
  font-weight: 700;
  font-size: 16px;
  &.second {
    background-color: #8cd558;
    border-color: #8cd558;
    color: #f5fbf1;
  }
  &.third {
    background-color: #429ef0;
    border-color: #429ef0;
    color: #f0f8fe;
  }
  &.fourth {
    background-color: #9059ff;
    border-color: #9059ff;
    color: #f6f2ff;
  }
`;

const UnLists = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  overflow: hidden;
  height: 80px;
  padding: 12px 12px 12px 92px;
  border: 1px solid #ff8e22;
  background-color: #fff9f1;
  box-shadow: ${(props) => props.theme.shadow.under};
  border-radius: 30px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  ${media.small`
		flex-wrap: wrap;
		gap: 0 8px;
		min-height: 80px;
		padding: 10px 10px 10px 80px;
	`};
  ${media.micro`
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 8px;
		height: auto;
	`};
  &.second {
    background-color: #f5fbf1;
    border-color: #8cd558;
  }
  &.third {
    background-color: #f0f8fe;
    border-color: #429ef0;
  }
  &.fourth {
    background-color: #f6f2ff;
    border-color: #9059ff;
  }
`;

const List = styled(motion.li)`
  flex: 1 1 calc(100% / 3 - 24px / 3 * 2);
  /* color: ${(props) => props.theme.textColor.gray.first}; */
  color: #000;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  ${media.small`
		flex-basis: calc(100%/2 - 8px/2*1);
		font-size: 12px;
		text-align: left;
	`};
  ${media.smallToo`
		flex-basis: 100%;
	`};
`;

const CoWorkTools = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${media.large`
		gap: 8px;
	`};
  ${media.smallToo`
		gap: 20px;
	`};
`;

const Items = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

const Item = styled(motion.div)`
  flex: 1 1 calc(100% / 3 - 8px / 3 * 2);
`;

const CoImg = styled(motion.img)`
  display: block;
  width: 70px;
  margin: 0 auto;
  border-radius: 50%;
  height: 70px;
  padding: 12px;
  background: linear-gradient(0deg, #ebebfa 0%, #ebebeb 100%);
  box-shadow: 0 0.7em 1.5em -0.5em #4d36d0be;
  opacity: 0.9;
  ${media.micro`
		width: 50px;
		height: 50px;
		padding: 8px;
	`};
`;

const ToolTxt = styled.p`
  padding-top: 8px;
  font-size: 12px;
  font-weight: 900;
  text-align: center;
`;

export interface chartInterface {
  series: {
    name: string;
    data: number[];
  }[];
  options: {};
}

export interface chartInterface2 {
  series: number[];
  options: {
    chart: {
      height: number;
    };
  };
}

const pluginsVariants = {
  hidden: {},
  visible: {
    transition: {
      type: 'spring',
      duration: 0.2,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const pluginVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const unListsVariants = {
  hidden: {
    opacity: 0,
    width: '80px',
    padding: '12px',
    borderRadius: '50%',
  },
  visible: {
    opacity: 1,
    width: '100%',
    padding: '12px 12px 12px 92px',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '30px',
    borderBottomLeftRadius: '40px',
    borderBottomRightRadius: '30px',
    transition: {
      // delay: 0.5
      ease: [1, 0.5, 1, 0.5],
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const itemsVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 3,
      type: 'spring',
      duration: 0.2,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function About() {
  const [loading, setLoading] = useState(true);
  // data: Tech Stack
  const [state, setState] = useState<chartInterface>();
  // data: Language Of Interest
  const [state2, setState2] = useState<chartInterface2>();
  // drag
  const CoWorkToolsRef = useRef<HTMLDivElement>(null);

  // scroll
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  useEffect(() => {
    setLoading(false);
    const chartOption = {
      series: [
        {
          name: 'Tech Stack',
          data: [90, 70, 50, 90, 95, 90],
        },
      ],
      options: {
        colors: ['#14e090', '#f8d622', '#fdfa29', '#fbeaad', '#b8005c', '#C66394'],
        labels: ['HTML', 'Javascript', 'React.js', 'JQuery', 'CSS', 'SCSS'],
        chart: {
          toolbar: {
            tools: {
              download: false,
            },
          },
          stacked: false,
          height: '410px',
          width: '100%',
          offsetY: 0,
          parentHeightOffset: 0,
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: false,
            columnWidth: '40px',
            borderRadius: 20,
            borderRadiusApplication: 'around',
            dataLabels: {
              position: 'top',
            },
          },
        },
        dataLabels: {
          offsetX: 0,
          offsetY: 15,
          formatter: (val: any) => {
            return val + '%';
          },
          dropShadow: {
            enabled: false,
          },
        },
        xaxis: {
          position: 'bottom',
          labels: {
            style: {
              colors: ['#14e090', '#f8d622', '#fdfa29', '#fbeaad', '#b8005c', '#C66394'],
              fontSize: '13px',
              fontWeight: 'bold',
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
        },
        yaxis: {
          tickAmount: 4,
          min: 0,
          max: 100,
          labels: {
            style: {
              colors: ['#7c7c7c'],
              fontSize: '12px',
              fontWeight: 'bold',
            },
            maxWidth: 100,
            formatter: (val: any) => {
              if (val === 0) {
                return val;
              } else {
                return val + '%';
              }
            },
          },
        },
        tooltip: {
          theme: 'dark',
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          offsetY: 10,
          fontSize: '12px',
          labels: {
            useSeriesColors: true,
          },
          markers: {
            width: 10,
            height: 10,
            radius: 10,
          },
          itemMargin: {
            horizontal: 20,
            vertical: 7,
          },
        },
        responsive: [
          {
            breakpoint: 1301,
            options: {
              chart: {
                height: '410px',
                width: '100%',
                offsetY: 0,
                parentHeightOffset: 0,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '35px',
                  borderRadius: 15,
                },
              },
              dataLabels: {
                offsetX: 0,
                offsetY: 15,
                formatter: (val: any) => {
                  return val + '%';
                },
                dropShadow: {
                  enabled: false,
                },
              },
              xaxis: {
                position: 'bottom',
                min: undefined,
                max: undefined,
                tickAmount: undefined,
                lebels: {
                  style: {
                    colors: ['#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e'],
                    fontSize: '14px',
                    fontWeight: 'bold',
                  },
                  maxWidth: undefined,
                  formatter: (val: any) => {
                    return val;
                  },
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                crosshairs: {
                  show: false,
                },
                labels: {},
              },
              yaxis: {
                tickAmount: 4,
                min: 0,
                max: 100,
                labels: {
                  style: {
                    colors: ['#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c'],
                    fontSize: '12px',
                    fontWeight: 'bold',
                  },
                  maxWidth: 100,
                  formatter: (val: any) => {
                    if (val === 0) {
                      return val;
                    } else {
                      return val + '%';
                    }
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
                yaxis: {
                  lines: {
                    show: true,
                  },
                },
              },
              legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 0,
                fontSize: '12px',
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  width: 10,
                  height: 10,
                  radius: 10,
                },
                itemMargin: {
                  horizontal: 10,
                  vertical: 7,
                },
              },
            },
          },
          {
            breakpoint: 1025,
            options: {
              height: '410px',
              width: '100%',
              offsetY: 0,
              parentHeightOffset: 10,
              plotOptions: {
                bar: {
                  horizontal: true,
                  columnWidth: '40px',
                  borderRadius: 10,
                  distributed: true,
                  borderRadiusApplication: 'around',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              xaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
                labels: {
                  // width: '10px',
                  style: {
                    colors: ['#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c'],
                    fontSize: '12px',
                    fontWeight: 'bold',
                  },
                  maxWidth: 100,
                  // formatter: (val: any) => {
                  // 	if (val === 0) {
                  // 		return val;
                  // 	} else {
                  // 		return (val + "%");
                  // 	}
                  // }
                },
                position: 'top',
                axisBorder: {
                  show: false,
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: ['#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e'],
                    fontSize: '14px',
                    fontWeight: 'bold',
                  },
                },
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                offsetY: 0,
                itemMargin: {
                  horizontal: 10,
                  vertical: 7,
                },
              },
              dataLabels: {
                textAnchor: 'middle',
                offsetX: -20,
                offsetY: 0,
                formatter: (val: any) => {
                  return val + '%';
                },
                dropShadow: {
                  enabled: false,
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: true,
                  },
                },
                yaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              title: {
                style: {
                  fontSize: '18px',
                },
              },
            },
          },
          {
            breakpoint: 651,
            options: {
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              xaxis: {
                labels: {
                  style: {
                    colors: ['#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c', '#7c7c7c'],
                    fontSize: '12px',
                    fontWeight: 'bold',
                  },
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: ['#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e', '#9e9e9e'],
                    fontSize: '14px',
                    fontWeight: 'bold',
                  },
                },
              },
              legend: {
                offsetY: 0,
                horizontalAlign: 'center',
                itemMargin: {
                  horizontal: 7,
                  vertical: 3,
                },
              },
              dataLabels: {
                textAnchor: 'middle',
                offsetX: -20,
                offsetY: 0,
                formatter: (val: any) => {
                  return val + '%';
                },
                dropShadow: {
                  enabled: false,
                },
              },
            },
          },
        ],
        noData: {
          text: '데이터가 없습니다.',
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#fff',
            fontSize: '16px',
            fontFamily: 'Righteous',
          },
        },
      },
    };
    const chartOption2 = {
      series: [45, 25, 30],
      options: {
        chart: {
          height: 340,
        },
        colors: ['#C66394', '#f8d622', '#ffb400'],
        labels: ['SCSS(SASS)', 'Javascript', 'React.js (with Typescript)'],
        yaxis: {
          tickAmount: 4,
          min: 0,
          max: 100,
          labels: {
            style: {
              colors: ['#7c7c7c'],
              fontSize: '12px',
              fontWeight: 'bold',
            },
            maxWidth: 100,
            formatter: (val: any) => {
              if (val === 0) {
                return val;
              } else {
                return val + '%';
              }
            },
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: '30%',
            },
          },
        },
        dataLabels: {
          style: {
            fontSize: '16px',
          },
          formatter: function (val: any) {
            return val + '%';
          },
          dropShadow: {
            enabled: false,
          },
        },
        legend: {
          fontSize: '14px',
          labels: {
            useSeriesColors: true,
          },
          position: 'top',
          horizontalAlign: 'right',
          markers: {
            offsetX: -10,
            offsetY: 1,
            width: 12,
            height: 12,
            radius: 12,
          },
          itemMargin: {
            horizontal: 30,
            vertical: 8,
          },
        },
        noData: {
          text: '데이터가 없습니다.',
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#fff',
            fontSize: '16px',
            fontFamily: 'Righteous',
          },
        },
      },
    };
    setState(chartOption);
    setState2(chartOption2);
    return () => {
      setState(undefined);
      setState2(undefined);
    };
  }, [loading]);
  return (
    <>
      {loading ? (
        <Loading prop="Loading" />
      ) : (
        <>
          <div className="container">
            <Profile style={{ scale }}>
              <ImgFrame>
                <ImgBox>
                  <Img src={heart} alt="프로필 이미지" />
                </ImgBox>
              </ImgFrame>
              <div>
                <Txt>UI/UX Developer 최진슬입니다.</Txt>
                <ul>
                  <li>
                    <Dl>
                      <Dt>Email</Dt>
                      <Dd>web.jinseul@gmail.com</Dd>
                    </Dl>
                  </li>
                </ul>
              </div>
            </Profile>
            <Content className="inner">
              <GridTop>
                <Grids>
                  <Grid className="chart-area">
                    <Title>Tech Stack</Title>
                    <Chart style={{ minHeight: '100%', height: '300px' }} type="bar" series={state?.series} options={state?.options} />
                  </Grid>
                  <Grid className="second">
                    <Title>Used Plugins</Title>
                    <Plugins variants={pluginsVariants} initial="hidden" animate="visible">
                      <Plugin variants={pluginVariants}>
                        <PluginTitle className="first">Scroll</PluginTitle>
                        <UnLists className="first" variants={unListsVariants}>
                          <List variants={listVariants}>AOS(Animate On Scroll Library)</List>
                          <List variants={listVariants}>ScrollMagic</List>
                          <List variants={listVariants}>GSAP</List>
                        </UnLists>
                      </Plugin>
                      <Plugin variants={pluginVariants}>
                        <PluginTitle className="second">Slider</PluginTitle>
                        <UnLists className="second" variants={unListsVariants}>
                          <List variants={listVariants}>bxSlider.js</List>
                          <List variants={listVariants}>Swiper.js</List>
                          <List variants={listVariants}>Slick.js</List>
                        </UnLists>
                      </Plugin>
                      <Plugin variants={pluginVariants}>
                        <PluginTitle className="third">Chart</PluginTitle>
                        <UnLists className="third" variants={unListsVariants}>
                          <List variants={listVariants}>Chart.js</List>
                          <List variants={listVariants}>Apexcharts.js</List>
                          <List variants={listVariants}>GSAP</List>
                        </UnLists>
                      </Plugin>
                      <Plugin variants={pluginVariants}>
                        <PluginTitle className="fourth">Calendar</PluginTitle>
                        <UnLists className="fourth" variants={unListsVariants}>
                          <List variants={listVariants}>FullCalendar.js</List>
                        </UnLists>
                      </Plugin>
                    </Plugins>
                  </Grid>
                </Grids>
              </GridTop>
              <Grids>
                <Grid className="cowork" ref={CoWorkToolsRef}>
                  <Title className="cowork">Cowork Tools</Title>
                  <CoWorkTools>
                    <Items variants={itemsVariants} initial="hidden" animate="visible">
                      <Item variants={itemVariants}>
                        <CoImg src={intellij} alt="intellij 로고" />
                        <ToolTxt>IntelliJ</ToolTxt>
                      </Item>
                      <Item variants={itemVariants}>
                        <CoImg src={vscode} alt="vscode 로고" />
                        <ToolTxt>VSCode</ToolTxt>
                      </Item>
                      <Item variants={itemVariants}>
                        <CoImg src={github} alt="github 로고" />
                        <ToolTxt>GitHub</ToolTxt>
                      </Item>
                    </Items>
                    <Items variants={itemsVariants} initial="hidden" animate="visible">
                      <Item variants={itemVariants}>
                        <CoImg src={photoshop} alt="photoshop 로고" />
                        <ToolTxt>Adobe PhotoShop</ToolTxt>
                      </Item>
                      <Item variants={itemVariants}>
                        <CoImg src={zeplin} alt="zeplin 로고" />
                        <ToolTxt>Zeplin</ToolTxt>
                      </Item>
                    </Items>
                    <Items variants={itemsVariants} initial="hidden" animate="visible">
                      <Item variants={itemVariants}>
                        <CoImg src={slack} alt="slack 로고" />
                        <ToolTxt>Slack</ToolTxt>
                      </Item>
                      <Item variants={itemVariants}>
                        <CoImg src={notion} alt="notion 로고" />
                        <ToolTxt>Notion</ToolTxt>
                      </Item>
                      <Item variants={itemVariants}>
                        <CoImg src={asana} alt="asana 로고" />
                        <ToolTxt>Asana</ToolTxt>
                      </Item>
                      <Item variants={itemVariants}>
                        <CoImg src={jira} alt="jira 로고" />
                        <ToolTxt>Jira</ToolTxt>
                      </Item>
                      <Item variants={itemVariants}>
                        <CoImg src={dooray} alt="dooray 로고" style={{ background: 'rgb(31, 74, 148)' }} />
                        <ToolTxt>Dooray</ToolTxt>
                      </Item>
                    </Items>
                  </CoWorkTools>
                </Grid>
                <Grid className="interest">
                  <Title>Language Of Interest</Title>
                  <Chart type="donut" height={state2?.options.chart.height} series={state2?.series} options={state2?.options} />
                </Grid>
              </Grids>
            </Content>
          </div>
        </>
      )}
    </>
  );
}
export default About;
