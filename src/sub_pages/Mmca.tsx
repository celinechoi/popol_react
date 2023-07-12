import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "style/media_query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import login from "img/sub_pages/mmca/login.jpg";
import main from "img/sub_pages/mmca/main.jpg";
import sub1 from "img/sub_pages/mmca/sub1-2.jpg";
import sub2 from "img/sub_pages/mmca/sub2-1.jpg";
import sub3 from "img/sub_pages/mmca/sub2-3.jpg";
import sub4 from "img/sub_pages/mmca/sub3-1.jpg";
import sub5 from "img/sub_pages/mmca/sub4-2.jpg";
import sub6 from "img/sub_pages/mmca/sub5-3.jpg";

const Grid = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 calc(100%/3 - 12px/3*2);
	min-height: 100px;
	overflow: hidden;
  background-color: rgba(251, 234, 173, 0.7);
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadow.box};
	cursor: pointer;
	>img {
		width: 100%;
	}
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
	left: 0;
	top: 0;
	z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridWhole = styled(motion.div)`
  position: relative;
	width: 70%;
	${media.large`
		width: 58%;
	`};
	border-radius: 20px;
	>img {
		width: 100%;
		border-radius: 20px;
		${media.medium`
			border-radius: 16px;
		`};
	}
	>svg {
    position: absolute;
    right: -50px;
    top: -5px;
		float: right;
    margin-bottom: 8px;
		color: #fff;
		font-size: 44px;
		cursor: pointer;
	}
`;
// grid motion
const overlay = {
	hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
	visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
	exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};


function Radiation() {
	const [data, setData] = useState<any[]>();
	const [id, setId] = useState<null | string>(null);
	const cmsArr = [login, main, sub1, sub2, sub3, sub4, sub5, sub6];
	useEffect(() => {
		let isMount = true;
		if (isMount) {
			setData(cmsArr);
		}
		return () => {
			isMount = false;
		};
	}, []);
	return (
		<div className="sub">
			<div>
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">CMS</h3>
						<p className="txt-default">고객관리를 위한 관리자 페이지</p>
					</div>
				</div>
				<div className="grids">
					{
						data?.map((val: any, i: any) => (
							<Grid onClick={() => setId(val)} key={i} layoutId={i}>
								<img src={val} alt="작업물 이미지" />
							</Grid>
						))
					}
				</div>
				<AnimatePresence>
					{id ? (
						<Overlay
							variants={overlay}
							onClick={() => setId(null)}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<GridWhole layoutId={id} >
								<FontAwesomeIcon icon={faXmark} />
								<img src={id} alt="작업물 이미지" />
							</GridWhole>
						</Overlay>
					) : null}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Radiation;