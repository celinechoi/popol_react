import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "style/media_query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import login from "img/sub_pages/lxproperty/login.jpg";
import gis from "img/sub_pages/lxproperty/gis.jpg";
import open from "img/sub_pages/lxproperty/open.jpg";
import index from "img/sub_pages/lxproperty/index.jpg";
import enrollment from "img/sub_pages/lxproperty/enrollment.jpg";
import modified from "img/sub_pages/lxproperty/modified.jpg";
import view from "img/sub_pages/lxproperty/view.jpg";
import { focusHandler, resetHandler } from "function/ModalScroll";

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
	${media.large`
		flex-basis: calc(100%/2 - 12px/2*1);
	`};
	${media.small`
		flex-basis: 100%;
	`};
	>img {
		width: 100%;
	}
`;

const Modal = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
  height: 100%;
  position: fixed;
	left: 0;
	top: 0;
	z-index: 2;
	height: calc(var(--vh, 1vh)*100);
`;

const Overlay = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #000;
	opacity: .4;
	z-index: -1;
`;

const GridWhole = styled(motion.div)`
  position: relative;
	z-index: 1;
	width: 70%;
	${media.large`
		width: 58%;
	`};
	${media.small`
		width: 100%;
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
		${media.small`
			right: 0;
			top: -40px;
			font-size: 38px;
		`};
	}
`;
// grid motion
const overlay = {
	hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
	visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
	exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};


function Lxproperty() {
	// state
	const [data, setData] = useState<any[]>();
	const [id, setId] = useState<null | string>(null);
	const [func, setFunc] = useState<any>({ on: null, off: null });
	// data
	const imgArr = [login, index, enrollment, modified, view, gis, open];
	useEffect(() => {
		let isMount = true;
		if (isMount) {
			setData(imgArr);
			setFunc({ on: focusHandler, off: resetHandler });
		}
		return () => {
			isMount = false;
			setData([]);
			setFunc({});
		};
	}, []);
	return (
		<div className="sub">
			<div>
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">관리자 & GIS(위치정보관리) 페이지</h3>
					</div>
				</div>
				<div className="grids">
					{
						data?.map((val: any, i: any) => (
							<Grid key={i} layoutId={i} onClick={() => { setId(val); func.on(); }}>
								<img src={val} alt="작업물 이미지" />
							</Grid>
						))
					}
				</div>
				<AnimatePresence>
					{id ? (
						<Modal>
							<Overlay variants={overlay} onClick={() => { setId(null); func.off(); }} initial="hidden" animate="visible" exit="exit" />
							<GridWhole layoutId={id} >
								<FontAwesomeIcon icon={faXmark} onClick={() => { setId(null); func.off(); }} />
								<img src={id} alt="작업물 이미지" />
							</GridWhole>
						</Modal>
					) : null}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Lxproperty;