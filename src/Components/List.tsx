import { useState } from "react";
import { WorkList } from "../api";

function List(){
	// Works List
	let tabData:WorkList = {
		SI : {
			itemCompose: {
				item: {
					id: 1,
					title: '한국아시아문화전당'
				}
			}
		},
		Solution : {
			itemCompose: {
				item: {
					id: 1,
					title: '아에듀'
				}
			}
		}
	}
	const [state, setState] = useState(tabData);
	console.log(state);
	return(
		<>
			<ul>
				<li>
					{state.SI.itemCompose.item.title}
				</li>
				<li>
					{state.Solution.itemCompose.item.title}
				</li>
			</ul>
		</>
	);
}

export default List;