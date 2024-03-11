function CurrentDate() {
	const currentDate = new Date()
	const currentDay = currentDate.getDate().toString()
	const currentMonth = (currentDate.getMonth() + 1).toString()
	const currentYear = currentDate.getFullYear().toString()
	const formattedDate = currentDay + '/' + currentMonth + '/' + currentYear

	return formattedDate
}

export default CurrentDate
