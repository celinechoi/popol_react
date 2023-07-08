import styled from "styled-components";
import { Link } from "react-router-dom";

const TabMenu = styled.ul`
	display: inline-block;
	clear: both;
	overflow: hidden;
	position: relative;
	top: 40px;
	padding: 12px;
	border-radius: 38px;
	background-color: ${(props) => props.theme.bgColor.gray.first};
	box-shadow: ${(props) => props.theme.shadow};
`;

const Tab = styled.li<{ isActive: boolean }>`
	float: left;
	margin-left: 12px;
	padding: 12px 28px;
	background-color: ${(props) =>
    props.isActive ? props.theme.point.blue[0] : "transparent"};
	border-radius: 26px;
	color: ${(props) =>
    props.isActive ? props.theme.textColor.gray.first : props.theme.textColor.gray.fixth};
	font-size: 18px;
	font-weight: 900;
	text-align: center;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.point.blue[0]};
		color: ${(props) => props.theme.textColor.gray.first};
	}
	&:first-child {
		margin-left: 0;
	}
`;
const workType = [
  {
    id: "si"
  },
  {
    id: "solution"
  },
  {
    id: "sm"
  }
]
function Tabs({ typePath }: { typePath :string | object}) {
  //console.log(typePath);
  return (
    <>
      <TabMenu>
        {
          workType.map((val) => (
            <Tab key={val.id} isActive={typePath === val.id ? true : false}>
              <Link to={{
                pathname: `/works/${val.id}`,
                state: { name: val.id }
              }}>{val.id}</Link>
            </Tab>
          ))
        }
      </TabMenu>
    </>
  );
}
export default Tabs;