function Result({ counterOne, counterTwo, liveAnnounceCounter }) {
	
	return (
		<>
			<div>{counterOne + ' : ' + counterTwo}</div>
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
