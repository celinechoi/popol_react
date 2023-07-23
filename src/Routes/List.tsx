import { dbService } from "fbase";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Tabs from "routes/Tabs";
import { media } from "style/media_query";
import Loading from "components/Loading";
import { motion } from "framer-motion";

const Title = styled.div`
  height: 200px;
	${media.small`
		height: auto;
	`};
	.page {
		&-h1 {
			text-align: center;
		}
	}
`;

const Container = styled.div`
	padding: 40px 0 0;
	${media.small`
		padding: 68px 0 0;
	`};
`;

const Boxes = styled(motion.ul)`
	display: flex;
	flex-wrap: wrap;
  gap: 32px;
	${media.medium`
		gap: 32px 20px;
	`};
	${media.small`
		flex-direction: column;
		gap: 24px;
	`}
`;

const Box = styled(motion.li)`
	flex: 0 0 calc(100%/3 - 32px/3*2);
	padding: 24px;
  box-shadow: ${(props) => props.theme.shadow.box};
  border: 1px solid ${(props) => props.theme.bgColor.gray.fourth};
  background-color: ${(props) => props.theme.bgColor.gray.first};
	background-color: ${(props) => props.theme.bgColor.gray.third};
	${media.medium`
		flex-basis: calc(100%/2 - 20px/2*1);
		padding: 20px;
		border-radius: 16px;
	`};
	${media.small`
			flex-basis: 100%;
			padding: 16px;
			border-radius: 12px;
	`}
`;

const BoxCon = styled.div`
	padding-top: 20px;
	p {
		padding-bottom: 8px;
		font-size: 14px;
		font-weight: 500;
		color: ${(props) => props.theme.textColor.gray.fourth};
		${media.small`
			padding-bottom: 0;
		`};
	}
	h4 {
		font-size: 20px;
		text-align: center;
		${media.small`
			font-size: 18px;
		`};
	}
`;

const ImgBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
  height: 165px;
	padding: 28px;
	background-color: #ededed;
	border-radius: 20px;
	${media.large`
		height: 145px;
	`};
	${media.medium`
		height: 150px;
		padding: 20px;
		border-radius: 16px;
	`};
	${media.small`
		height: 130px;
		padding: 16px;
		border-radius: 12px;
	`}
	>img {
		display: block;
		position: relative;
		z-index: 1;
		width: 70%;
  	height: auto;
		padding: 20px;
		background-color: #ededed;
		${media.large`
			padding: 0;
		`};
		${media.small`
			width: 35%;
		`}
		${media.smallToo`
			width: 55%;
		`};
	}
`;

export interface WorkInterface {
	id: string,
	projectName: string | undefined,
	customer: string,
	fileUrl: string | undefined,
	pageImgs: [] | undefined,
	pagesMap: [] | undefined,
	description: string | undefined,
	did: [] | undefined,
	keyWords: [] | undefined,
	startYear: number | undefined,
	startMonth: number | undefined,
	endMonth: number | undefined,
	endYear: number | undefined,
	code: number | undefined,
}

export interface TypesParams {
	typeId: string;
}

// motion
const boxesVariants = {
	start: {
	},
	end: {
		transition: {
			type: "spring",
			duration: .2,
			delayChildren: 0.5,
			staggerChildren: 0.2,
		}
	}
}

const boxVariants = {
	start: {
		borderRadius: 0,
		opacity: 0,
		y: 10,
	},
	end: {
		borderRadius: 20,
		opacity: 1,
		y: 0,
		transition: {
			duration: .5,
		}
	}
}

function List() {
	const { typeId } = useParams<TypesParams>();
	// state
	const [loading, setLoading] = useState(true);
	const [ImgLoading, setImgLoading] = useState(true);
	const [list, setList] = useState<WorkInterface[]>([]);
	useEffect(() => {
		let isMount = true;
		if (isMount) {
			const collection = dbService.collection(`${typeId}`);
			collection
				.orderBy("code", "desc") // desc
				// .orderBy("endMonth", "desc")
				.onSnapshot((snapshot: any) => {
					const itemArr = snapshot.docs.map((doc: any) => ({
						id: doc.id,
						projectName: doc.data().projectName,
						customer: doc.data().customer,
						fileUrl: doc.data().fileUrl,
						pageImgs: doc.data().pageImgs,
						pagesMap: doc.data().pagesMap,
						description: doc.data().description,
						did: doc.data().did,
						keyWords: doc.data().keywords,
						startYear: doc.data().startYear,
						startMonth: doc.data().startMonth,
						endYear: doc.data().endYear,
						endMonth: doc.data().endMonth,
						code: doc.data().code,
						...doc.data(),
					}));
					setList(itemArr);
					setLoading(false);
					timeReturn();
					// return () => {
					// 	setLoading(false)
					// };
				})
		}
		return () => {
      setList([]);
			isMount = false;
			
		};
	}, [typeId]);
	let timer = setTimeout(() => { setImgLoading(false) }, 700);
	let timeReturn = () => {
		return () => {
			clearTimeout(timer);
		};
	}
	return (
		<>
			<div className="container">
				<Title>
					<div className="inner">
						<h2 className="page-h1">Works</h2>
						<Tabs typePath={typeId} />
					</div>
				</Title>
				<Container>
					<div className="inner">
						{loading ? (
							<Loading name="List" />
						) : (
							<>
								<Boxes variants={boxesVariants} initial="start" animate="end">
									{
										list.map((val) => (
											<Box key={val.customer} variants={boxVariants}>
												<Link to={{
													pathname: `/works/${typeId}/${val.id}`,
													state: {
														parentPath: typeId,
														id: val.id,
														customer: val.customer,
														projectName: val.projectName,
														description: val.description,
														did: val.did,
														keyWords: val.keyWords,
														fileUrl: val.fileUrl,
														pageImgs: val.pageImgs,
														pagesMap: val.pagesMap,
														startYear: val.startYear,
														startMonth: val.startMonth,
														endYear: val.endYear,
														endMonth: val.endMonth,
													}
												}}>
													<ImgBox>
														{
															ImgLoading ?
																(
																	<Loading name="Image" />
																) : (
																	<img src={val.fileUrl} alt={val.projectName} />
																)
														}
													</ImgBox>
													<BoxCon>
														<p>{val.customer}</p>
														<h4>{val.projectName} 홈페이지</h4>
													</BoxCon>
												</Link>
											</Box>
										))
									}
								</Boxes>
							</>
						)}
					</div>
				</Container >
			</div >
		</>
	)
}

export default List;