import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "style/media_query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { focusHandler, resetHandler } from "function/ModalScroll";
import tvcfInfo from "img/sub_pages/iedu/tvcf_info.png";
import tvcfInfo2 from "img/sub_pages/iedu/tvcf_info_v2.png";
import chance from "img/sub_pages/iedu/chance.png";
import testStart from "img/sub_pages/iedu/test_start.png";
import testStep1 from "img/sub_pages/iedu/test_step1.png";
import testStep2 from "img/sub_pages/iedu/test_step2.png";
import testStep3 from "img/sub_pages/iedu/test_step3.png";
import testResult from "img/sub_pages/iedu/test_result.png";
import renewalMain from "img/sub_pages/iedu/renewal_main.png";
import learnerInfo from "img/sub_pages/iedu/renewal_learner_info.png";

const ChildSection = styled.div`
	padding-top: 28px;
	${media.medium`
		padding-top: 22px;
	`};
`;

const Grid = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex: 0 0 calc(100%/3 - 12px/3*2);
	min-height: 100px;
	max-height: 300px;
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

function Iedu() {
	// state
	const [data, setData] = useState<any[]>([]);
	const [data2, setData2] = useState<any[]>([]);
	const [data3, setData3] = useState<any[]>([]);
	const [id, setId] = useState<null | string>(null);
	const [func, setFunc] = useState<any>({ on: null, off: null });
	// data
	const imgArr = [tvcfInfo, tvcfInfo2, chance];
	const imgArr2 = [testStart, testStep1, testStep2, testStep3, testResult];
	const renewalArr = [renewalMain, learnerInfo];
	useEffect(() => {
		let isMount = true;
		if (isMount) {
			setData(imgArr);
			setData2(imgArr2);
			setData3(renewalArr);
			setFunc({ on: focusHandler, off: resetHandler });
		}
		return () => {
			isMount = false;
			setData([]);
			setData2([]);
			setData3([]);
			setFunc({});
		};
	}, []);
	return (
		<div className="sub">
			<section>
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">새로운 페이지</h3>
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
				<ChildSection>
					<div className="sub-view">
						<div className="sub-view-title">
							<p className="txt-default">심리 테스트 페이지</p>
						</div>
					</div>
					<div className="grids">
						{
							data2?.map((val: any, i: any) => (
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
				</ChildSection>
			</section>
			<section className="section-v2">
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">리뉴얼 페이지</h3>
					</div>
				</div>
				<div className="grids">
					{
						data3?.map((val: any, i: any) => (
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
			</section>
		</div>
	)
}

export default Iedu;