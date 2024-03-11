import { useState } from 'react'
import './App.css'
import GameDisplay from './components/GameDisplay/GameDisplay.jsx'


// I wanted to give the user a possibility for tracking more than one game
// That is done by appending new GameDisplay component when button is clicked (can't do it now)
function App() {
	// Values of the array are only appended to array to make use of the "map" method
	const [gamesCount, setGamesCount] = useState([0])

	function handleClick() {
		setGamesCount(gamesCount.concat(0))
	}

	return (
		<>
			{gamesCount.map((el, index) => (
				<GameDisplay key={index}></GameDisplay>
			))}
			<button className="add-games-button" onClick={handleClick}>Track more games!</button>
		</>
	)
}

export default App
