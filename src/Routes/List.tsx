import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Sub from "Routes/Sub";
import Tabs from "./Tabs";

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
  box-shadow: ${(props) => props.theme.shadow};
  border: 1px solid ${(props) => props.theme.bgColor.gray.fourth};
  background-color: ${(props) => props.theme.bgColor.gray.first};
`;

const ImgBox = styled.img`
  width: 100%;
  height: auto;
`;

export interface WorkInterface {
	id: string,
	customer: string,
	endMonth: number | [],
	endYear: number | [],
	fileUrl: string,
	projectName: string,
	startMonth: number | [],
	startYear: number | [],
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
                          type: typeId,
                          name: val.id
                        } }}>
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