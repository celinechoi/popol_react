import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "style/media_query";
import styled from "styled-components";
import cms_main from "img/sub_pages/radiation/cms/cms_main.jpg";
import cms_sub1 from "img/sub_pages/radiation/cms/cms_sub1.jpg";
import cms_sub2 from "img/sub_pages/radiation/cms/cms_sub2.jpg";
import cms_sub3 from "img/sub_pages/radiation/cms/cms_sub3.jpg";
import cms_sub4 from "img/sub_pages/radiation/cms/cms_sub4.jpg";
import cms_sub5 from "img/sub_pages/radiation/cms/cms_sub5.jpg";
import cms_sub6 from "img/sub_pages/radiation/cms/cms_sub6.jpg";
import pms_login from "img/sub_pages/radiation/pms/pms_login.jpg";
import pms_main from "img/sub_pages/radiation/pms/pms_main.jpg";
import pms_sub1 from "img/sub_pages/radiation/pms/pms_sub1.jpg";
import pms_sub2 from "img/sub_pages/radiation/pms/pms_sub2.jpg";
import pms_sub3 from "img/sub_pages/radiation/pms/pms_sub3.jpg";
import pms_sub4 from "img/sub_pages/radiation/pms/pms_sub4.jpg";
import pms_sub5 from "img/sub_pages/radiation/pms/pms_sub5.jpg";
import pms_sub6 from "img/sub_pages/radiation/pms/pms_sub6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const View = styled.div`
	.txt {
		&-default {
			padding-top: 16px;
			${media.medium`
				padding-top: 14px;
			`};
		}
	}
`;

const ViewTitle = styled.div`
	padding-bottom: 32px;
	${media.medium`
		padding-bottom: 28px;
	`};
	${media.small`
		padding-bottom: 24px;
	`};
`;

const Grids = styled.div`
  display: flex;
	flex-wrap: wrap;
  width: 100%;
  gap: 12px;
`;

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

const ImgBox = styled(motion.div)`

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

const cmsArr = [cms_main, cms_sub1, cms_sub2, cms_sub3, cms_sub4, cms_sub5, cms_sub6];

const pmsArr = [pms_login, pms_main, pms_sub1, pms_sub2, pms_sub3, pms_sub4, pms_sub5, pms_sub6];

function Radiation() {
	const [id, setId] = useState<null | string>(null);
	return (
		<>
			<div>
				<View>
					<ViewTitle>
						<h3 className="page-h3">CMS</h3>
						<p className="txt-default">고객관리를 위한 관리자 페이지</p>
					</ViewTitle>
				</View>
				<Grids>
					{
						cmsArr.map((val: any, i: any) => (
							<Grid onClick={() => setId(val)} key={i} layoutId={i}>
								<img src={val} alt="작업물 이미지" />
							</Grid>
						))
					}
				</Grids>
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
				<View>
					<ViewTitle>
						<h3 className="page-h3">PMS</h3>
						<p className="txt-default">파트너를 위한 관리자 페이지</p>
					</ViewTitle>
				</View>
				<Grids>
					{
						pmsArr.map((val: any, i: any) => (
							<Grid onClick={() => setId(val)} key={i} layoutId={i}>
								<img src={val} alt="작업물 이미지" />
							</Grid>
						))
					}
				</Grids>
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
		</>
	)
}

export default Radiation;