import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";

const PageFrame = styled(motion.div)`
	height: 200vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled(motion.div)`
 width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Ailemp() {
	const x = useMotionValue(0);
	const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
	const gradient = useTransform(
		x, [-800, 800],
		[
			"linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
			"linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
		]
	);
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
	return (
		<div className="sub">
			<PageFrame style={{ background: gradient }}>
				<Page style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
			</PageFrame>
		</div>
	);
}
export default Ailemp;