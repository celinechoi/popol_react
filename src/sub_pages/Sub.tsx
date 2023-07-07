import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { workInterface } from "../routes/List";
import { useEffect, useState } from "react";
import { dbService } from "fbase";
import styled from "styled-components";
import Ailemp from "./Ailemp";

const SubPage = styled.div`
	position: relative;
`;

interface interParams {
	typeId: string;
	itemId: string;
}

function Sub() {
	// 현재 페이지 파악
	const match = useRouteMatch<interParams>('/:typeId/:itemId');
	//console.log(match, 'match');
	const typeName = match?.params.typeId;
	const itemName = match?.params.itemId;

	const [loading, setLoading] = useState(true);
	const [list, setList] = useState<workInterface[]>([]);

	// typeName이 바뀔때만 데이터 호출.(중복 실행 막기)
	useEffect(() => {
		const collection = dbService.collection(`${typeName}`);
		collection.onSnapshot((snapshot: any) => {
			const itemArr = snapshot.docs.map((doc: any) => ({
				id: doc.id,
				customer: doc.data().customer,
				endMonth: doc.data().endMonth,
				endYear: doc.data().endYear,
				fileUrl: doc.data().fileUrl,
				projectName: doc.data().projectName,
				startMonth: doc.data().startMonth,
				startYear: doc.data().startYear,
				...doc.data(),
			}));
			setList(itemArr);
			// 현재 페이지 해당되는 데이터만 추출
			function currName(el: any) {
				console.log("right?", itemName);
				console.log("el.id", el.id);
				if (el.id === `${itemName}`) {
					return true
				}
			}
			const nowObj = list.find(currName);
			console.log(nowObj, 'nowObj');
			setLoading(false);
		})
		return () => setLoading(false);
	}, [typeName]);
	// console.log(Object.keys(list));


	return (
		<>
			{
				loading ? (
					"Loading"
				) : (
					<>

						{/* <SubPage key={nowObj.id}>
							<div className="title">
								<div className="inner">
									<ul>
										<li>Works</li>
										<li>{typeName}</li>
									</ul>
									<h2>{nowObj.projectName}</h2>
								</div>
							</div>
						</SubPage> */}

						{/* <Switch>
							<Route path="/:typeId/:itemId" render={() => (`${typeName}` === "ailemp" ? <Ailemp /> : "")} />
						</Switch> */}
					</>
				)
			}

		</>
	);
}
export default Sub;