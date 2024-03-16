import './GameDisplay.css'
import CurrentDate from '../CurrentDate/CurrentDate.jsx'
import { useEffect, useState } from 'react'
import Timer from '../Timer/Timer.jsx'
import TeamDropdown from '../TeamDropdown/TeamDropdown.jsx'
import Result from '../Result/Result.jsx'
import Controls from '../Controls/Controls.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'

// I decided to make this component the one which will make use of "lifting the state up" principle
// The idea was that GameDisplay component can be rendered multiple times and each GameDisplay can then have its own independent logic

function GameDisplay() {
	// Explanation for the states: 
	// "counter" states are used to handle result for team one and team two respectively 
	// "chosenTeam" states remember which team has been chosen from the dropdown, that is also currently displayed team (for team one and team two respectively) 
	// "isGameOver" state will change state to true if timer counts up to 90 minutes
	// "timerSeconds" and "timerMinutes" change state upon pressing timer buttons in "Timer.jsx" file, their state has been lifted up because the states need to be used for display and also reset button
	// "liveAnounceCounter" is an array of strings which will be displayed as an announcement on the display when some team scores the goal
	// "teamStatistics" states are objects which handle yellow cards, red cards and shots for each team respectively
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
	
	// useEffect hooks are used so that as soon as counterOne or counterTwo states are changed we can render announcement on the screen, e.g., when we increment score we will display a new result
	useEffect(() => {
		// we want to render new announcement only when result is greater than 0
		if (counterOne > 0) {
			setLiveAnnounce(
				liveAnnounceCounter.concat(
					"Goal " + chosenTeamOne + "! " + counterOne + ':' + counterTwo + ' - ' + timerMinutes + "'" + timerSeconds + '"'
				)
			)
		}
	}, [counterOne])

	useEffect(() => {
		if (counterTwo > 0){
			setLiveAnnounce(
				liveAnnounceCounter.concat(
					"Goal " + chosenTeamTwo + "! " + counterOne + ':' + counterTwo + ' - ' + timerMinutes + "'" + timerSeconds + '"'
				)
			)
		}
	}, [counterTwo])

	// In the code below I made use of conditional rendering, components can now appear and reapear based on the useState hooks states
	// One example is that buttons won't appear unless both teams are chosen
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
						setTeamOne={setTeamOne}
						setTeamTwo={setTeamTwo}

					/>
				)}
			</div>
			<div className="team-one">
				<TeamDropdown
					chosenTeam={chosenTeamOne}
					setTeam={setTeamOne}
					teamStatistics={teamStatisticsOne}
					setTeamStatistics={setTeamStatisticsOne}
					isGameOver={isGameOver}
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
					isGameOver={isGameOver}
				/>
			</div>
			<div className="controls">
				{!isGameOver && chosenTeamOne && chosenTeamTwo && (
					<Controls
						handleIncrement={() => setCounterOne(counterOne + 1)}
						handleDecrement={handleDecrementCounterOne}
					/>
				)}
				{!isGameOver && chosenTeamOne && chosenTeamTwo && (
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
				{!isGameOver && chosenTeamOne && chosenTeamTwo && (
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
