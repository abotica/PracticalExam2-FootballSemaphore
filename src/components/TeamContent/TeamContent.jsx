import './TeamContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-regular-svg-icons'

function TeamContent({ teamImages, chosenTeam, teamStatistics, setTeamStatistics }) {
	
	return (
		<div id="team-content">
			<img
				className="team-logo"
				src={teamImages.find((team) => team.name === chosenTeam).image}
				alt="Team Logo"
			></img>
			<div className="statistics">
				<div className='statistic-container'><FontAwesomeIcon  onClick={ () => {
					setTeamStatistics({
						yellowCards: teamStatistics.yellowCards + 1,
						redCards: teamStatistics.redCards,
						shots: teamStatistics.shots
					})
				}} title='Add yellow card' className="card-icons" icon={faSquare} style={{color: "#FFD43B"}}></FontAwesomeIcon>
				<span>{teamStatistics.yellowCards}</span>
			</div>

			<div className='statistic-container'><FontAwesomeIcon  onClick={ () => {
					setTeamStatistics({
						yellowCards: teamStatistics.yellowCards,
						redCards: teamStatistics.redCards + 1,
						shots: teamStatistics.shots
					})
				}} 
				title='Add red card' className="card-icons" icon={faSquare} style={{color: "#ff0000"}}></FontAwesomeIcon>
				<span>{teamStatistics.redCards}</span>
				</div>

				<div className='statistic-container'><FontAwesomeIcon onClick={ () => {
					setTeamStatistics({
						yellowCards: teamStatistics.yellowCards,
						redCards: teamStatistics.redCards,
						shots: teamStatistics.shots + 1
					})
				}}
				title='Add shot' className="football" icon={faFutbol} style={{color: "74C0FC"}}></FontAwesomeIcon>
				<span>{teamStatistics.shots}</span>
				</div>
			</div>
		</div>
	)
}

export default TeamContent
