import './TeamDropdown.css'
import Team1 from '/src/assets/images (1).png'
import Team2 from '/src/assets/images (2).jpeg'
import Team3 from '/src/assets/images (2).png'
import Team4 from '/src/assets/images (3).png'
import Team5 from '/src/assets/images (4).png'
import Team6 from '/src/assets/images (5).png'
import Team7 from '/src/assets/images (6).png'
import Team8 from '/src/assets/images (7).png'
import Team9 from '/src/assets/images (8).png'
import Team10 from '/src/assets/images (9).png'
import Team11 from '/src/assets/images (10).png'
import Team12 from '/src/assets/images.png'
import Team13 from '/src/assets/klizav-pod.png'
import { useState } from 'react'
import TeamContent from './TeamContent'

function TeamDropdown({ chosenTeam, setTeam, teamStatistics, setTeamStatistics }) {
	const teamImages = [
		{ image: Team1, name: 'NK Junak Sinj' },
		{ image: Team2, name: 'Liverpool' },
		{ image: Team3, name: 'NK Mosor' },
		{ image: Team4, name: 'NK Primorac 1929' },
		{ image: Team5, name: 'NK Solin' },
		{ image: Team6, name: 'Real Madrid' },
		{ image: Team7, name: 'FC Barcelona' },
		{ image: Team8, name: 'Manchester United' },
		{ image: Team9, name: 'FC Bayern München' },
		{ image: Team10, name: 'Juventus' },
		{ image: Team11, name: 'Chelsea' },
		{ image: Team12, name: 'NK Hajduk Split' },
		{ image: Team13, name: 'MNK Klizav Pod' },
	]

	return (
		<>
			<select
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
				></TeamContent>
			)}
		</>
	)
}

export default TeamDropdown
