import './Timer.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

function Timer({
	isGameOver,
	setGameOver,
	timerSeconds,
	setTimerSeconds,
	timerMinutes,
	setTimerMinutes,
}) {
	function handleClickSeconds() {
		setTimerSeconds(timerSeconds + 10)
	}

	function handleClickMinutes() {
		setTimerMinutes(timerMinutes + 1)
	}

	useEffect(() => {
		if (timerMinutes === 90) {
			setGameOver(true)
		}
	}, [timerMinutes])

	useEffect(() => {
		if (timerSeconds === 60) {
			setTimerSeconds(0)
			setTimerMinutes(timerMinutes + 1)
		}
	}, [timerSeconds])

	console.log(timerSeconds, timerMinutes)
	return (
		<div className="timer-container">
			{isGameOver || timerMinutes + ' : ' + timerSeconds}
			{isGameOver && <span className='match-ended-span'>This match has ended!</span>}
			{isGameOver || (
				<div className="timer-controls">
					<button onClick={handleClickMinutes}>
						<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
						<span className="button-text">1min</span>
					</button>
					<button onClick={handleClickSeconds}>
						<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
						<span className="button-text">10sec</span>
					</button>
				</div>
			)}
		</div>
	)
}

export default Timer
