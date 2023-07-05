import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface workInterface {
	customer:string,
	endMonth:number | [],
	endYear:number | [],
	projectName:string,
	startMonth:number | [],
  startYear:number | [],
}

interface RouteParams {
  typeId: string;
}

function List(){
	const {typeId} = useParams<RouteParams>();
	const [loading, setLoading] = useState(true);
	const [list, setList] = useState<workInterface[]>([]);
  useEffect(() => {
		const collection = dbService.collection(`${typeId}`);
			collection.onSnapshot((snapshot) => {
				const itemArr = snapshot.docs.map((doc) => ({
					id: doc.id,
					customer: doc.data().customer,
					endMonth: doc.data().endMonth,
					endYear: doc.data().endYear,
					projectName: doc.data().projectName,
					startMonth: doc.data().startMonth,
					startYear: doc.data().startYear,
					...doc.data(),
				}));
				setList(itemArr);
				setLoading(false);
			})
			return () => setLoading(false);
  }, [typeId]);
	return (
		<>
		{loading ? (
        "Loading"
      ) : (
        <div>
          {
						list.map((val) => (
						<div key={val.customer}>
							<h4>{val.projectName}</h4>
						</div>
						))
					}
        </div>
      )}
		</>
	)
}

export default List;