import styled from "styled-components";
import { media } from "../style/media_query";
import List from "../components/List";
import { WorkList } from "../api";
import { Link, Route, Switch, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Auth from "./Auth";
import Si from "components/Si";
import Solution from "components/Solution";
import Sm from "components/Sm";

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

const Tab = styled.li`
	float: left;
	margin-left: 12px;
	padding: 12px 28px;
	border-radius: 26px;
	color: ${(props) => props.theme.textColor.gray.fixth};
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


interface CoinInterface {
  id: string;
}

interface RouteState {
  name: string;
}

function Works(){
	return (
		<>
			<Title>
				<div className="inner">
					<p>Works</p>
					<Tabs>
						{
							workType.map((val) => (
								<Tab key={val.id}>
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