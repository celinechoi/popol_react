import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { TypesParams, WorkInterface } from "Routes/List";
import { useEffect, useState } from "react";
import { dbService } from "fbase";
import styled from "styled-components";
// import Ailemp from "./Ailemp";

const SubPage = styled.div`
	position: relative;
`;

interface ItemParams {
	itemId: string;
}

function Sub() {
	// 현재 페이지 파악
	// const match = useRouteMatch<interParams>('/:typeId/:itemId');
	// const typeName = match?.params.typeId;
	// const itemName = match?.params.itemId;
  //const { typeId } = useParams<TypesParams>();
  // const { itemId } = useParams<ItemParams>();
  // console.log(useParams());
  // console.log("subpage");
	// const [loading, setLoading] = useState(true);
	// const [list, setList] = useState<WorkInterface[]>([]);

	// typeName이 바뀔때만 데이터 호출.(중복 실행 막기)
	// useEffect(() => {
  //   const collection = dbService.collection(`${typeId}`);
	// 	collection.onSnapshot((snapshot: any) => {
	// 		const itemArr = snapshot.docs.map((doc: any) => ({
	// 			id: doc.id,
	// 			customer: doc.data().customer,
	// 			endMonth: doc.data().endMonth,
	// 			endYear: doc.data().endYear,
	// 			fileUrl: doc.data().fileUrl,
	// 			projectName: doc.data().projectName,
	// 			startMonth: doc.data().startMonth,
	// 			startYear: doc.data().startYear,
	// 			...doc.data(),
	// 		}));
	// 		setList(itemArr);

	// 		// 현재 페이지 해당되는 데이터만 추출
	// 		function currName(el: any) {
	// 			// console.log("right?", itemName);
	// 			// console.log("el.id", el.id);
  //       if (el.id === `${typeId}`) {
	// 				return true
	// 			}
	// 		}
  //     // console.log(list,'list');
	// 		const nowObj = list.find(currName);
	// 		// console.log(nowObj, 'nowObj');
	// 		setLoading(false);
	// 	})
	// 	return () => setLoading(false);
  // }, [typeId]);
	// console.log(Object.keys(list));


	return (
		<>
			<p>subPAge!!!!!!</p>

		</>
	);
}
export default Sub;