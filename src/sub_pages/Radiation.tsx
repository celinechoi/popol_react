import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "style/media_query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import cms_main from "img/sub_pages/radiation/cms/main.jpg";
import cms_sub1 from "img/sub_pages/radiation/cms/sub1.jpg";
import cms_sub2 from "img/sub_pages/radiation/cms/sub2.jpg";
import cms_sub3 from "img/sub_pages/radiation/cms/sub3.jpg";
import cms_sub4 from "img/sub_pages/radiation/cms/sub4.jpg";
import cms_sub5 from "img/sub_pages/radiation/cms/sub5.jpg";
import cms_sub6 from "img/sub_pages/radiation/cms/sub6.jpg";
import pms_login from "img/sub_pages/radiation/pms/login.jpg";
import pms_main from "img/sub_pages/radiation/pms/main.jpg";
import pms_sub1 from "img/sub_pages/radiation/pms/sub1.jpg";
import pms_sub2 from "img/sub_pages/radiation/pms/sub2.jpg";
import pms_sub3 from "img/sub_pages/radiation/pms/sub3.jpg";
import pms_sub4 from "img/sub_pages/radiation/pms/sub4.jpg";
import pms_sub5 from "img/sub_pages/radiation/pms/sub5.jpg";
import pms_sub6 from "img/sub_pages/radiation/pms/sub6.jpg";
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


function Radiation() {
	// state
	const [data, setData] = useState<any[]>();
	const [data2, setData2] = useState<any[]>();
	const [func, setFunc] = useState<any>({ on: null, off: null });
	const [id, setId] = useState<null | string>(null);
	useEffect(() => {
		// data 
		const cmsArr = [cms_main, cms_sub1, cms_sub2, cms_sub3, cms_sub4, cms_sub5, cms_sub6];
		const pmsArr = [pms_login, pms_main, pms_sub1, pms_sub2, pms_sub3, pms_sub4, pms_sub5, pms_sub6];
		let isMount = true;
		if (isMount) {
			setData(cmsArr);
			setData2(pmsArr);
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
			<section>
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">CMS</h3>
						<p className="txt-default">고객관리를 위한 관리자 페이지</p>
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
			</section>
			<section className="section-v2">
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">PMS</h3>
						<p className="txt-default">파트너를 위한 관리자 페이지</p>
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
			</section>
		</div>
	)
}

export default Radiation;