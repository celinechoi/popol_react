import { QueryDocumentSnapshot } from "firebase/firestore";
import { useCollection } from "react-query-firestore";
import { Optional } from "react-query-firestore/lib/typescript/types";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import { typesParams, workInterface } from "../routes/List";
import { useEffect, useState } from "react";
import { dbService } from "fbase";

interface subPageParams {
  itemId: string;
}

function Sub(){
	const { itemId } = useParams<subPageParams>();
	//console.log(itemId, 'itemId');
	const match = useRouteMatch<typesParams>('/:typeId/:itemId');
	const typeName = match?.params.typeId;

	// const location = useLocation();
	// console.log(location, 'location');

	// console.log('itemId',typeId);
	const [loading, setLoading] = useState(true);
	const [list, setList] = useState<workInterface[]>([]);
	// useEffect(() => {

	// })

	/**
	 * 
	 * useCollection(
  query(
    collection(getFirestore(app), "channels", channelId, "messages"),
    orderBy("timestamp", "asc")
  )
);
	 */

	const { data } = useCollection<workInterface[]>(`${typeName}`);
	useEffect(() => {
	const collection = dbService.collection(`${typeName}`);
	collection.onSnapshot((snapshot:any) => {
		console.log('snapshot', snapshot);
		const itemArr = snapshot.docs.map((doc:any) => ({
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
		setLoading(false);
	})
	return () => setLoading(false);
  }, [typeName]);

	// console.log("data:", data[0].projectName);

	// function extract(el:any) {
	// 	if(el.id === `${itemId}`) {
	// 		return true;
	// 	}
	// }

	// const itemObj = data?.find(extract);
	// console.log(itemObj?.exists);


	// const itemArr = data?.map((val)=>({
	// 	...val
	// }));
	// const res = [];
	// const itemObj = data?.forEach(({id}) => {
	// 	res.push({
	// 		id: id,
	// 	});
	// })
	
	//setList(itemObj);
	//console.log(list);
	// const res:any[] = [];
	// const itemObj = data?.map((val) => {
	// 	console.log(val);
  // })
	//console.log(res);

	return (
		<>
			<div className="title">
				<div className="inner">
					<h2>{itemId}</h2>
					{
						list.map((val) => (
						<div key={val.id}>
							<div>
								<img src={val.fileUrl} />
								<h4>{val.projectName}</h4>
								{val.id}
							</div>
						</div>
						))
					}
				</div>
			</div>
			<p>Sub</p>
		</>
	);
}
export default Sub;