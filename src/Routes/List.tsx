import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Tabs from "routes/Tabs";

const Title = styled.div`
  height: 200px;
	background-color: ${(props) => props.theme.point.blue[1]};
	h2 {
		padding-top: 50px;
		color: ${(props) => props.theme.textColor.gray.first};
		font-size: 44px;
		font-weight: 700;
	}
`;

const Container = styled.div`
	padding: 110px 0 80px;
`;

const Boxes = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 32px;
`;

const Box = styled.li`
	flex: 0 0 calc(100%/3 - 32px/3*2);
	padding: 24px;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadow.box};
  border: 1px solid ${(props) => props.theme.bgColor.gray.fourth};
  background-color: ${(props) => props.theme.bgColor.gray.first};
`;

const ImgBox = styled.img`
  width: 100%;
  height: auto;
`;

export interface WorkInterface {
	id: string,
	projectName: string | undefined,
	customer: string,
	fileUrl: string | undefined,
	description: string | undefined,
	did: [] | undefined,
	keyWords: [] | undefined,
	startYear: number | undefined,
	startMonth: number | undefined,
	endMonth: number | undefined,
	endYear: number | undefined,
}

export interface TypesParams {
	typeId: string;
}

interface RouteState {
	name: string;
}

interface P {
	pathType: string;
}

function List() {
	const { typeId } = useParams<TypesParams>();
	// console.log(useParams(), 'params');
	const [loading, setLoading] = useState(true);
	const [list, setList] = useState<WorkInterface[]>([]);
	useEffect(() => {
		const collection = dbService.collection(`${typeId}`);
		collection.onSnapshot((snapshot: any) => {
			const itemArr = snapshot.docs.map((doc: any) => ({
				id: doc.id,
				projectName: doc.data().projectName,
				customer: doc.data().customer,
				fileUrl: doc.data().fileUrl,
				description: doc.data().description,
				did: doc.data().did,
				keyWords: doc.data().keywords,
				startYear: doc.data().startYear,
				startMonth: doc.data().startMonth,
				endYear: doc.data().endYear,
				endMonth: doc.data().endMonth,
				...doc.data(),
			}));
			setList(itemArr);
			setLoading(false);
		})
		return () => setLoading(false);
	}, [typeId]);
	interface RouteParams {
		typeId: string;
	}
	//console.log(useParams());
	return (
		<>
			<Title>
				<div className="inner">
					<h2>Works</h2>
					<Tabs typePath={typeId} />
				</div>
			</Title>
			<Container>
				<div className="inner">
					{loading ? (
						"Loading"
					) : (
						<>
							<Boxes>
								{
									list.map((val) => (
										<Box key={val.customer}>
											<Link to={{
												pathname: `/works/${typeId}/${val.id}`,
												state: {
													parentPath: typeId,
													id: val.id,
													customer: val.customer,
													projectName: val.projectName,
													description: val.description,
													did: val.did,
													keyWords: val.keyWords,
													fileUrl: val.fileUrl,
													startYear: val.startYear,
													startMonth: val.startMonth,
													endYear: val.endYear,
													endMonth: val.endMonth,
												}
											}}>
												<ImgBox src={val.fileUrl} />
												<h4>{val.projectName}</h4>
												{val.id}
											</Link>
										</Box>
									))
								}
							</Boxes>
						</>
					)}
				</div>
			</Container>
		</>
	)
}

export default List;