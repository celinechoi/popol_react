import styled from "styled-components";
import { media } from "../style/media_query";
import List from "../Components/List";
import { WorkList } from "../api";

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
		.tab {
			&-list {
				display: inline-block;
				clear: both;
				overflow: hidden;
				position: relative;
				top: 40px;
				padding: 12px;
				border-radius: 38px;
				background-color: ${(props) => props.theme.bgColor.gray.first};
				box-shadow: ${(props) => props.theme.shadow};
				>li {
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
					&.on {
						background-color: ${(props) => props.theme.point.blue[0]};
						color: ${(props) => props.theme.textColor.gray.first};
					}
					&:first-child {
						margin-left: 0;
					}
				}
			}
		}
	}
`;

function Works(){
	
	return (
		<>
			<Title>
				<div className="inner">
					<p>Works</p>
					<ul className="tab-list">
						<li>SI (System Integration)</li>
						<li className="on">Solution</li>
						<li>SM (System Management)</li>
					</ul>
				</div>
			</Title>
			<List></List>
		</>
	);
}
export default Works;