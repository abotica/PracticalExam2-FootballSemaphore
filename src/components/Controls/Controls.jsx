import './Controls.css'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
