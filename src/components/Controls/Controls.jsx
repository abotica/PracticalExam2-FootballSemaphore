import './Controls.css'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Handling increment and decrement buttons
// There is only one reset button per display and that is why I didn't want to add it here, if I were to add it here then user would have 2 reset buttons doing the same thing
function Controls({
	handleIncrement,
	handleDecrement
}) {
	
	return (
		<div id="main-controls-div">
			<button
				onClick={() => {
					handleIncrement()
				}}
			>
				<FontAwesomeIcon icon={faPlus} />
			</button>
			<button onClick={handleDecrement}>
				<FontAwesomeIcon icon={faMinus} />
			</button>
		</div>
	)
}

export default Controls
