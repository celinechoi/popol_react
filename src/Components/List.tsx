import { ref, child, get } from "firebase/database";
import { firebaseDB } from "fbase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface workInterface {
	customer:string,
	endDate:string,
	id:string,
	projectName:string,
	startDate:string
}

function List(){
	let [datas, setData] = useState<workInterface[]>([]);
	const [loading, setLoading] = useState(true);
	const readOne = async () => {
		const snapshot = await get(ref(firebaseDB, '/WorkList/Solution'));
  	const allDatas = await snapshot.val();
		setData(allDatas);
		setLoading(false);
		console.log(datas);
		// get(ref(firebaseDB, "/WorkList"))
		// 	.then(snapshot => {
		// 	if (snapshot.exists()) {
		// 		setData(snapshot.val())
		// 	} else {
		// 		console.log("No data available");
		// 	}
		// })
		// 	.catch(error => {
		// 	console.error(error);
		// });
	};
	useEffect(()=>{readOne()}, []);
	return (
		<>
		{loading ? (
        "Loading"
      ) : (
        <div>
          {datas.map((data) => (
            <div key={data.id}>
              <Link to={`/${data.id}`}>{data.id} &rarr;</Link>
            </div>
          ))}
        </div>
      )}
		</>
	)
}

export default List;