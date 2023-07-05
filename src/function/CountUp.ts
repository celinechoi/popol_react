import { useEffect, useState } from 'react'

// ease-out 애니메이션
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

// count up 구현 
export default function useCountUp(end: number, start = 0, duration = 2000) {
  const [count, setCount] = useState(start)
  const frameRate = 1000 / 60
  const totalFrame = Math.round(duration / frameRate)

	let currentNumber = start
	const counter = setInterval(() => {
		const progress = easeOutExpo(++currentNumber / totalFrame)
		setCount(Math.round(end * progress))

		if (progress === 1) {
			clearInterval(counter)
		}
	}, frameRate)

  return count
}