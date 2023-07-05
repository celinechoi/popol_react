import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  box-shadow: 0 2px 10px 0 ${(props) => props.theme.shadow};
  border: 1px solid ${(props) => props.theme.bgColor.gray.fourth};
  background-color: ${(props) => props.theme.bgColor.gray.first};
`;

const ImgBox = styled.img`
  width: 100%;
  height: auto;
`;

interface workInterface {
  id: string,
	customer:string,
	endMonth:number | [],
	endYear:number | [],
  fileUrl:string,
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
	return (
		<>
		<Container>
			<div className="inner">
				{loading ? (
					"Loading"
				) : (
					<Boxes>
						{
							list.map((val) => (
							<Box key={val.customer}>
                <ImgBox src={val.fileUrl} />
								<h4>{val.projectName}</h4>
                {val.id}
							</Box>
							))
						}
					</Boxes>
				)}
			</div>
		</Container>
		</>
	)
}

export default List;