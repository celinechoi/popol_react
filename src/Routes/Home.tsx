import {useState, useEffect} from "react";
import styled from "styled-components";
import useCountUp from "../function/CountUp"
import {media} from '../style/media_query';
import good_emoji from "../img/emoji/good.png";
import { dbService } from "fbase";

const Visual = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 550px;
	background-color: ${(props) => props.theme.bgColor.gray.first};
	${media.medium`
		height: 440px;
	`};
	>img {
		display: block;
		width: 267px;
		${media.medium`
			width: 23%;
		`};
	}
	>p {
		font-size: 44px;
		font-weight: 900;
		${media.medium`
			font-size: 36px;
		`};
		span {
			color: ${(props) => props.theme.point.yellow};
		}
	}
`;

function Home({userObj}:any){
	console.log(userObj);
	const [nweet, setNeweet] = useState("");
	const [nweets, setNweets] = useState([]);
	const getNweets = async() => {
		const dbNweets = await dbService.collection("nweets").get();
		dbNweets.forEach((document) => {
			const nweetObject = {
				...document.data(),
				id: document.id,
			}
		})
	}
	useEffect(() => {
		getNweets();
	}, []);
	const onSubmit = async (event:any) => {
		event.preventDefault();
		await dbService.collection("nweets").add({
			text: nweet,
			createAt: Date.now(),
			creatorId: userObj.uid
		});
		setNeweet("");
	}
	const onChange = (event:any) => {
		const {target:{value}} = event;
		setNeweet(value);
	}
	return (
		<>
			<form onSubmit={onSubmit}>
				<input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
				<input type="submit" value="Nweet" />
			</form>
			<Visual>
				<img src={good_emoji} alt="good_emoji" />
				<p><span>{useCountUp(17)}</span>개의 프로젝트</p>
				<p><span>{useCountUp(7)}</span>년차</p>
				<p>UI/UX 개발자 최진슬 입니다.</p>
			</Visual>
		</>
	);
}
export default Home;