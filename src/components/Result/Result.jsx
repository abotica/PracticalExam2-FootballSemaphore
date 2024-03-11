import './Result.css'
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
