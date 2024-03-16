import { useState } from 'react'
import './App.css'
import GameDisplay from './components/GameDisplay/GameDisplay.jsx'


// I wanted to give the user a possibility for tracking more than one game
// That is done by appending new GameDisplay component when button is clicked
function App() {
	// Values of the array are only added to the gamesCounter array to make use of the "map" method, I added number 0
	// For now that was the only way I found that worked perfectly for realisation of my idea
	const [gamesCounter, setGamesCounter] = useState([0])

	function handleClick() {
		setGamesCounter(gamesCounter.concat(0))
	}

	return (
		<>
		{/* If the button is clicked handleClick will concatenate another element to the array and return the newly created array */}
		{/* That is an important function because it DOES NOT MODIFY the gamesCounter directly */}
		{/* Upon adding another element React will re-render changed nodes and map function will now display more GameDisplay components */}
			{gamesCounter.map((el, index) => (
				<GameDisplay key={index}></GameDisplay>
			))}
			<button className="add-games-button" onClick={handleClick}>Track more games!</button>
		</>
	)
}

export default App
