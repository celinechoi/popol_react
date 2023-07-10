import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "style/media_query";

const TabMenu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	position: relative;
	top: 40px;
	padding: 12px;
	border-radius: 38px;
	background-color: ${(props) => props.theme.bgColor.gray.second};
	box-shadow: ${(props) => props.theme.shadow.under};
	${media.medium`
		gap: 14px;
		top: 32px;
		padding: 8px 12px;
		border-radius: 24px;
	`};
`;

const Tab = styled.li<{ isActive: boolean }>`
	margin-left: 12px;
	padding: 12px 28px;
	background-color: ${(props) =>
		props.isActive ? props.theme.point.blue[0] : "transparent"};
	border-radius: 26px;
	color: ${(props) =>
		props.isActive ? props.theme.textColor.gray.first : props.theme.textColor.gray.fifth};
	font-size: 18px;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.point.blue[0]};
		color: ${(props) => props.theme.textColor.gray.first};
	}
	&:first-child {
		margin-left: 0;
	}
	${media.medium`
		padding: 8px 28px;
		border-radius: 20px;
	`};
	${media.small`
		padding: 8px 16px;
    font-size: 16px;
	`};
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
function Tabs({ typePath }: { typePath: string | object }) {
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