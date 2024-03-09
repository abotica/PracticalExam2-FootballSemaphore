import './Team.css'

function Team({teamName}){
    return (
        <>
            <select>
            <option hidden>Choose team</option>
            <option value={teamName}>{teamName}</option>
            </select>
            
        </>
    )
}

export default Team