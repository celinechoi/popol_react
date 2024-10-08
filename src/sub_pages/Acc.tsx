import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "style/media_query";
import styled from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import main from "img/sub_pages/acc/main.jpg";
import sub1 from "img/sub_pages/acc/sub1-2.jpg";
import sub2 from "img/sub_pages/acc/sub2-2.jpg";
import sub3 from "img/sub_pages/acc/sub3-3.jpg";
import sub4 from "img/sub_pages/acc/sub4-2.jpg";
import sub5 from "img/sub_pages/acc/sub5-9.jpg";
import sub6 from "img/sub_pages/acc/sub6-6.jpg";
import ticket from "img/sub_pages/acc/ticketing_main.jpg";
import ticketArabic from "img/sub_pages/acc/ticketing_main_arabic.jpg";
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
	z-index: 9;
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
// motion
const overlay = {
	hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
	visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
	exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const girdVariants = {
	start: {
		border: "3px solid transparent"
	},
	hover: {
		borderColor: "#ffcc42",
		y: -20,
		scale: 1.05,
	}
}

function Acc() {
	// state
	const [data, setData] = useState<any[]>();
	const [data2, setData2] = useState<any[]>();
	const [id, setId] = useState<null | string>(null);
	const [func, setFunc] = useState<any>({ on: null, off: null });
	useEffect(() => {
		// data
		const accArr = [main, sub1, sub2, sub3, sub4, sub5, sub6];
		const ticketArr = [ticket, ticketArabic];
		let isMount = true;
		if (isMount) {
			setData(accArr);
			setData2(ticketArr);
			setFunc({ on: focusHandler, off: resetHandler });
		}
		return () => {
			isMount = false;
			setData([]);
			setData2([]);
			setFunc({});
		};
	}, []);
	return (
		<div className="sub">
			<div>
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">관리자</h3>
					</div>
				</div>
				<div className="grids">
					{
						data?.map((val: any, i: any) => (
							<Grid key={i} layoutId={i} onClick={() => { setId(val); func.on(); }} variants={girdVariants} initial="start" whileHover="hover">
								<img src={val} alt="작업물 이미지" />
							</Grid>
						))
					}
				</div>
				<AnimatePresence>
					{id ? (
						<Modal>
							<Overlay variants={overlay} onClick={() => setId(null)} initial="hidden" animate="visible" exit="exit" />
							<GridWhole layoutId={id} >
								<FontAwesomeIcon icon={faXmark} onClick={() => { setId(null); func.off(); }} />
								<img src={id} alt="작업물 이미지" />
							</GridWhole>
						</Modal>
					) : null}
				</AnimatePresence>
			</div>
			<div className="section-v2">
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">티켓 페이지</h3>
					</div>
				</div>
				<div className="grids">
					{
						data2?.map((val: any, i: any) => (
							<Grid key={i} layoutId={i} onClick={() => { setId(val); func.on(); }} variants={girdVariants} initial="start" whileHover="hover">
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

export default Acc;