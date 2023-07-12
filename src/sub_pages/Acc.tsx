import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "style/media_query";
import styled from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import main from "img/sub_pages/acc/asia_admin_main.jpg";
import sub1 from "img/sub_pages/acc/asia_admin_sub1-2.jpg";
import sub2 from "img/sub_pages/acc/asia_admin_sub2-2.jpg";
import sub3 from "img/sub_pages/acc/asia_admin_sub3-3.jpg";
import sub4 from "img/sub_pages/acc/asia_admin_sub4-2.jpg";
import sub5 from "img/sub_pages/acc/asia_admin_sub5-9.jpg";
import sub6 from "img/sub_pages/acc/asia_admin_sub6-6.jpg";
import ticket from "img/sub_pages/acc/ticketing_main.jpg";
import ticketArabic from "img/sub_pages/acc/ticketing_main_arabic.jpg";
// import ticketMo from "img/sub_pages/acc/ticketing_main_mo.jpg";
// import ticketArabicMo from "img/sub_pages/acc/ticketing_main_arabic_mo.jpg";

const Grid = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 calc(100%/2 - 12px/2*1);
	min-height: 250px;
	overflow: hidden;
  background-color: rgba(251, 234, 173, 0.7);
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadow.box};
	cursor: pointer;
	>img {
		width: 100%;
		&.small {
			width: 30%;
		}
	}
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
	left: 0;
	top: 0;
	z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridWhole = styled(motion.div)`
	width: 70%;
	${media.large`
		width: 95%;
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

function Acc() {
	const [data, setData] = useState<any[]>();
	const [data2, setData2] = useState<any[]>();
	const [id, setId] = useState<null | string>(null);
	const accArr = [main, sub1, sub2, sub3, sub4, sub5, sub6];
	const ticketArr = [ticket, ticketArabic];
	useEffect(() => {
		let isMount = true;
		if (isMount) {
			setData(accArr);
			setData2(ticketArr);
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
						<h3 className="page-h3">관리자</h3>
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
			<div className="section-v2">
				<div className="sub-view">
					<div className="sub-view-title">
						<h3 className="page-h3">티켓 페이지</h3>
					</div>
				</div>
				<div className="grids">
					{
						data2?.map((val: any, i: any) => (
							<Grid onClick={() => setId(val)} key={i} layoutId={i}>
								<img src={val} alt="작업물 이미지" className={i === 2 || i === 3 ? "small" : ""} />
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
							<GridWhole layoutId={id}>
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

export default Acc;