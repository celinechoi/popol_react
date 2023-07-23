import styled from "styled-components";
import heart from "img/emoji/heart.png";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import Loading from "components/Loading";

const Content = styled.div`
  padding-top: 40px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ImgBox = styled.div`
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.point.lavender};
  width: 146px;
  height: 146px;
  padding: 12px;
  background-color: ${props => props.theme.point.lavender};
`;

const Img = styled.img`
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
  color: ${props => props.theme.textColor.gray.fifth};
  font-size: 14px;
  &::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 10px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${props => props.theme.textColor.gray.fifth};
  }
`;

const Dd = styled.dd`
  color: ${props => props.theme.textColor.gray.first};
  font-size: 14px;
  font-weight: 700;
`;

const GridTop = styled.div`
  margin-bottom: 32px;
  padding: 24px 18px;
  border-radius: 20px;
  background-color: ${props => props.theme.bgColor.gray.first};
  border: 1px solid ${props => props.theme.borColor.gray.first};
`;

const Grids = styled.ul`
  display: flex;
  gap: 24px 32px;
`;

const Grid = styled.li`
  flex: 1 1 calc(100%/2 - 32px/2*1);
  height: 300px;
  background-color: ${props => props.theme.bgColor.gray.first};
  border-radius: 20px;
  &.second {
    background-color: ${props => props.theme.bgColor.gray.fourth};
  }
`;

export interface chartInterface {
  series: {
    name: string,
    data: number[],
  }[],
  options: {
    colors: string[],
    labels: string[],
  }
}

function About(){
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<chartInterface>();
  const chartOption = {
    series: [
      {
        name: "Tech Stack",
        data: [100, 70, 50, 90, 95, 60] }
    ],
    options: {
      colors: ['#14e090', '#f8d622', '#fbeaad', '#d7b81e', '#d32f2f', '#ff543a'],
      labels: ['HTML', 'Javascript', 'React.js', 'JQuery', 'CSS', 'SCSS'],
      chart: {
        stacked: false,
        toolbar: {
          tools: {
            download: false
          }
        },
        height: '100%',
        width: '100%',
      },
      plotOptions: {
        bar: {
          distributed: true,
          columnWidth: '40px',
          borderRadius: 7,
          borderRadiusApplication: 'around',
          dataLabels: {
            position: 'top'
          }
        }
      },
      title: {
        text: 'Tech Stack',
        align: 'left',
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '24px',
          fontWeight: 'bold',
          fontFamily: 'Noto Sans KR',
          color: '#ddd'
        },
      },
      dataLabels: {
        offsetY: 10,
        formatter: (val: any) => {
          return val + "%";
        },
        dropShadow: {
          enabled: false
        }
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false
        },
      },
      yaxis: {
        labels: {
          formatter: (val: any) => {
            return val + "%";
          }
        }
      },
      tooltip: {
        theme: 'dark',
      },
      grid: {
        show: true,
        row: {
          // colors: "#ddd",
          opacity: 0.3
        },
      },
      legend: {
        horizontalAlign: 'center', 
        fontSize: '12px',
        labels : {
          useSeriesColors: true,
        },
        markers: {
          width: 10,
          height: 10,
          radius: 3,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
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
          fontFamily: 'Righteous'
        }
      },
    }
  }
  useEffect(()=>{
    setLoading(false);
    setState(chartOption);
    return () => {
      // setState();
    }
  }, []);
	return (
		<div className="container">
      <Profile>
        <ImgBox>
          <Img src={heart} alt="프로필 이미지"/>
        </ImgBox>
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
        {loading ? 
          (<Loading name="about" />) :
          (<>
            <GridTop>
              <Grids>
                <Grid>
                  <Chart type="bar" series={state?.series} options={state?.options} />
                </Grid>
                <Grid className="second"></Grid>
              </Grids>
            </GridTop>
            <Grids>
              <Grid></Grid>
              <Grid></Grid>
            </Grids>
          </>) 
        }
      </Content>			
		</div>
	);
}
export default About;