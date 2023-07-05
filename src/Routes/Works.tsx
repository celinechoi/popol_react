import styled from "styled-components";
import { media } from "../style/media_query";
import { Link, useLocation } from "react-router-dom";

const Title = styled.div`
	height: 200px;
	background-color: ${(props) => props.theme.point.blue[1]};
	.inner {
		max-width: 1400px;
		margin: 0 auto;
		${media.large`
			max-width: calc(100% - 40px);
		`};
		>p {
			padding-top: 50px;
			color: ${(props) => props.theme.textColor.gray.first};
			font-size: 44px;
			font-weight: 700;
		}
	}
`;

const Tabs = styled.ul`
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

const Tab = styled.li<{isActive: boolean}>`
	float: left;
	margin-left: 12px;
	padding: 12px 28px;
	background-color: ${(props) => 
	props.isActive? props.theme.point.blue[0] : "transparent"};
	border-radius: 26px;
	color: ${(props) => 
	props.isActive? props.theme.textColor.gray.first : props.theme.textColor.gray.fixth};
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

function Works(){

	const pathSpoiler = useLocation().pathname.substring(7, useLocation().pathname.length)
	// console.log('pathSpoiler', pathSpoiler);
	return (
		<>
			<Title>
				<div className="inner">
					<p>Works</p>
					<Tabs>
						{
							workType.map((val) => (
								<Tab key={val.id} isActive={pathSpoiler === val.id ? true: false}>
									<Link to={{
										pathname: `/works/${val.id}`,
										state: {name: val.id}
									}}>{val.id}</Link>
								</Tab>
							))
						}
					</Tabs>
				</div>
			</Title>
		</>
	);
}
export default Works;