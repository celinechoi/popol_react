function Hrdi() {
	const iframePart = () => {
		return {
			__html: '<iframe src="sub_hrdi.html" width="1600px" height="100%"></iframe>'
		}
	}
	return (
		<>
			<div dangerouslySetInnerHTML={iframePart()}></div>
		</>
	);
}
export default Hrdi;