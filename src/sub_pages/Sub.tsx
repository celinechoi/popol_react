import { useLocation, useParams, useRouteMatch } from "react-router-dom";

interface RouteParams {
  itemId: string;
}

function Sub(){
	const {itemId} = useParams<RouteParams>();
	console.log(itemId, 'itemId');

	console.log(useRouteMatch());
	const location = useLocation();
	console.log(location, 'location');
	return (
		<>
			<div className="title">
				<div className="inner">
					<h2>{itemId}</h2>
					
				</div>
			</div>
			<p>Sub</p>
		</>
	);
}
export default Sub;