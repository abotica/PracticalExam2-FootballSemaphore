import './Timer.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

// This components handles timer and timer buttons
// I made two timer buttons, one that adds 1 minute per click and another that adds 10 seconds per click (for faster use)
// Also I made use of "or" condition similarly to "and" condition just for the purpose of showing the first true value and not first false value
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

	// Game will be set to over as soon as timer hits 90 minutes
	useEffect(() => {
		if (timerMinutes === 90) {
			setGameOver(true)
		}
	}, [timerMinutes])
	// One minute will be added to timer as soon as timer hits 60 seconds, then seconds are reset to 0 again to mimick the real timer
	useEffect(() => {
		if (timerSeconds === 60) {
			setTimerSeconds(0)
			setTimerMinutes(timerMinutes + 1)
		}
	}, [timerSeconds])


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
