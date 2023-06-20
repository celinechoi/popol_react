import { ref, child, get } from "firebase/database";
import { firebaseDB } from "../firebase";
import { useEffect } from "react";

function List(){
	const readOne = () => {
		const dbRef = ref(firebaseDB);
		get(child(dbRef, "/WorkList"))
			.then(snapshot => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
			} else {
				console.log("No data available");
			}
		})
			.catch(error => {
			console.error(error);
		});
	};
	useEffect(()=>{readOne()}, []);
	return (
		<>firebase</>
	)
}

export default List;