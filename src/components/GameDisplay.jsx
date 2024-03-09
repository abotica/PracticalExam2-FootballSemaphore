import CurrentDate from './CurrentDate'
import './GameDisplay.css'
import { useState } from 'react'
import Timer from './Timer'
import Team from './Team'
import Result from './Result'
import Controls from './Controls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRotateLeft,
} from '@fortawesome/free-solid-svg-icons'
import Team1 from '/src/assets/klizav-pod-128x128.png'

function GameDisplay() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	function handleDecrementCounterOne() {
		if (counterOne === 0) {
			alert("Counter one can't be negative!")
		} else {
			setCounterOne(counterOne - 1)
		}
	}

	function handleDecrementCounterTwo() {
		if (counterTwo === 0) {
			alert("Counter one can't be negative!")
		} else {
			setCounterTwo(counterTwo - 1)
		}
	}

	return (
		<div id="game-display-div">
			<div className="current-date">
				<CurrentDate />
			</div>
			<div className="timer">
				<Timer />
			</div>
			<div className="team-one">
				<Team teamName={'KLIZAV POD'} />
			</div>
			<div className="result">
				<Result
					counterOne={counterOne}
					counterTwo={counterTwo}
				/>
			</div>
			<div className="team-two">
				<Team teamName={'KLIZAV STROP'} />
			</div>
			<div className="controls">
				<Controls
					handleIncrement={() => setCounterOne(counterOne + 1)}
					handleDecrement={handleDecrementCounterOne}
				/>
				<button
					className="reset-button"
					onClick={() => {
						setCounterOne(0)
						setCounterTwo(0)
						// RESET ALL ?????
					}}
				>
					<FontAwesomeIcon icon={faArrowRotateLeft} />
				</button>
				<Controls
					handleIncrement={() => setCounterTwo(counterTwo + 1)}
					handleDecrement={handleDecrementCounterTwo}
				/>
			</div>
		</div>
	)
}

export default GameDisplay
