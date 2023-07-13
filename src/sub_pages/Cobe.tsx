import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "style/media_query";
import styled from "styled-components";
import { focusHandler, resetHandler } from "function/ModalScroll";
import main from "img/sub_pages/cobe/main.png";

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
// grid motion
const overlay = {
	hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
	visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
	exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};


function Cobe() {
	// state
	const [data, setData] = useState<any[]>();
	const [id, setId] = useState<null | string>(null);
	const [func, setFunc] = useState<any>({ on: null, off: null });
	// data
	const imgArr = [main];
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
						<h3 className="page-h3">COBE ONE Platform</h3>
						<p className="txt-default">코베 전시 티켓 및 용품 구입을 위한 사용자 페이지</p>
					</div>
				</div>
				<div className="grids">
					{
						data?.map((val: any, i: any) => (
							<Grid key={i} layoutId={i}>
								<img src={val} alt="작업물 이미지" />
							</Grid>
						))
					}
				</div>
			</div>
		</div >
	)
}

export default Cobe;