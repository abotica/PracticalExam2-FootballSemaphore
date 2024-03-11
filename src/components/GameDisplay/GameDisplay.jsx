import './GameDisplay.css'
import CurrentDate from '../CurrentDate/CurrentDate.jsx'
import { useEffect, useState } from 'react'
import Timer from '../Timer/Timer.jsx'
import TeamDropdown from '../TeamDropdown/TeamDropdown.jsx'
import Result from '../Result/Result.jsx'
import Controls from '../Controls/Controls.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'

function GameDisplay() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)
	const [chosenTeamOne, setTeamOne] = useState(undefined)
	const [chosenTeamTwo, setTeamTwo] = useState(undefined)
	const [isGameOver, setGameOver] = useState(false)
	const [timerSeconds, setTimerSeconds] = useState(0)
	const [timerMinutes, setTimerMinutes] = useState(0)
	const [liveAnnounceCounter, setLiveAnnounce] = useState([])
	const [teamStatisticsOne, setTeamStatisticsOne] = useState({
		yellowCards: 0,
		redCards: 0,
		shots: 0,
	})
	const [teamStatisticsTwo, setTeamStatisticsTwo] = useState({
		yellowCards: 0,
		redCards: 0,
		shots: 0,
	})

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

	useEffect(() => {
		if (counterOne > 0 || counterTwo > 0) {
			setLiveAnnounce(
				liveAnnounceCounter.concat(
					counterOne + ':' + counterTwo + ' - ' + timerMinutes + "'" + ' min'
				)
			)
		}
	}, [counterOne, counterTwo])

	return (
		<div id="game-display-div">
			<div className="current-date">
				<CurrentDate />
			</div>
			<div className="timer">
				{chosenTeamOne && chosenTeamTwo && (
					<Timer
						isGameOver={isGameOver}
						setGameOver={setGameOver}
						timerSeconds={timerSeconds}
						setTimerSeconds={setTimerSeconds}
						timerMinutes={timerMinutes}
						setTimerMinutes={setTimerMinutes}
					/>
				)}
			</div>
			<div className="team-one">
				<TeamDropdown
					chosenTeam={chosenTeamOne}
					setTeam={setTeamOne}
					teamStatistics={teamStatisticsOne}
					setTeamStatistics={setTeamStatisticsOne}
				/>
			</div>
			<div className="result">
				<Result
					counterOne={counterOne}
					counterTwo={counterTwo}
					liveAnnounceCounter={liveAnnounceCounter}
				/>
			</div>
			<div className="team-two">
				<TeamDropdown
					chosenTeam={chosenTeamTwo}
					setTeam={setTeamTwo}
					teamStatistics={teamStatisticsTwo}
					setTeamStatistics={setTeamStatisticsTwo}
				/>
			</div>
			<div className="controls">
				{chosenTeamOne && chosenTeamTwo && (
					<Controls
						handleIncrement={() => setCounterOne(counterOne + 1)}
						handleDecrement={handleDecrementCounterOne}
					/>
				)}
				{chosenTeamOne && chosenTeamTwo && (
					<button
						className="reset-button"
						onClick={() => {
							setCounterOne(0)
							setCounterTwo(0)
							setGameOver(false)
							setTimerMinutes(0)
							setTimerSeconds(0)
							setLiveAnnounce([])
							setTeamStatisticsOne({
								yellowCards: 0,
								redCards: 0,
								shots: 0,
							})
							setTeamStatisticsTwo({
								yellowCards: 0,
								redCards: 0,
								shots: 0,
							})
						}}
					>
						<FontAwesomeIcon icon={faArrowRotateLeft} />
					</button>
				)}
				{chosenTeamOne && chosenTeamTwo && (
					<Controls
						handleIncrement={() => setCounterTwo(counterTwo + 1)}
						handleDecrement={handleDecrementCounterTwo}
					/>
				)}
			</div>
		</div>
	)
}

export default GameDisplay
