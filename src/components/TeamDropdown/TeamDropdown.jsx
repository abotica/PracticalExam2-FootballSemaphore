import './TeamDropdown.css'
import Team1 from '/src/assets/NKJunak.svg'
import Team2 from '/src/assets/LiverpoolFC.png'
import Team3 from '/src/assets/NKMosor.png'
import Team4 from '/src/assets/GNKDinamoZagreb.png'
import Team5 from '/src/assets/NKSolin.png'
import Team6 from '/src/assets/RealMadridCF.png'
import Team7 from '/src/assets/FCBarcelona.png'
import Team8 from '/src/assets/ManchesterUnited.png'
import Team9 from '/src/assets/BayernMunich.svg.png'
import Team10 from '/src/assets/Juventus.png'
import Team11 from '/src/assets/ChelseaFC.png'
import Team12 from '/src/assets/HajdukSplit.png'
import Team13 from '/src/assets/KlizavPod.png'
import TeamContent from '../TeamContent/TeamContent.jsx'


// This component holds logos of some famous football clubs :)
// Those logos are imported then saved to the "teamImages" array
// Based on chosen option from dropdown menu logo of that team will appear with content (red card, yellow card, shots) for that team
// User can choose the same team because that team can have training match with team members
function TeamDropdown({ chosenTeam, setTeam, teamStatistics, setTeamStatistics, isGameOver }) {
	const teamImages = [
		{ image: Team1, name: 'NK Junak Sinj' },
		{ image: Team2, name: 'Liverpool' },
		{ image: Team3, name: 'NK Mosor' },
		{ image: Team4, name: 'Dinamo Zagreb' },
		{ image: Team5, name: 'NK Solin' },
		{ image: Team6, name: 'Real Madrid' },
		{ image: Team7, name: 'FC Barcelona' },
		{ image: Team8, name: 'Manchester United' },
		{ image: Team9, name: 'FC Bayern München' },
		{ image: Team10, name: 'Juventus' },
		{ image: Team11, name: 'Chelsea' },
		{ image: Team12, name: 'Hajduk Split' },
		{ image: Team13, name: 'MNK Klizav Pod' },
	]

	return (
		<>
			<select disabled={isGameOver} name='Team Dropdown'
				onChange={(event) => {
					setTeam(event.target.value)
				}}
			>
				<option hidden>Choose team</option>
				{teamImages.map((el, index) => (
					<option key={index}>{el.name}</option>
				))}
			</select>

			{chosenTeam && (
				<TeamContent
					teamImages={teamImages}
					chosenTeam={chosenTeam}
					teamStatistics={teamStatistics}
					setTeamStatistics={setTeamStatistics}
					isGameOver={isGameOver}
				></TeamContent>
			)}
		</>
	)
}

export default TeamDropdown
