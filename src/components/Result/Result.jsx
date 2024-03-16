import './Result.css'

//This component handles result and announcements, announcements are then mapped similarly to mapping of GameDisplay components
function Result({ counterOne, counterTwo, liveAnnounceCounter }) {
	
	return (
		<>
			<div id='result-counter'>{counterOne + ':' + counterTwo}</div>
			<div className="result-announce">
				{liveAnnounceCounter.map((announcement, index) => (
					<p
						className="announcement"
						key={index}
					>
						{announcement}
					</p>
				))}
			</div>
		</>
	)
}

export default Result
