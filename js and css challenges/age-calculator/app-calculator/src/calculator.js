const ageCalculator = (date) => {
  const now = new Date()
  const dayNow = now.getDate()
  const monthNow = now.getMonth() + 1
  const yearNow = now.getFullYear()

  let calcYear = yearNow - date.year
  let calcMonth = null
  let calcDay = null

  console.log(monthNow)

  if (monthNow < date.month) {
    calcYear -= 1
    calcMonth = monthNow - date.month + 12
  } else {
    console.log(monthNow + " " + date.month)
    calcMonth = monthNow - date.month
  }

  if (dayNow < date.day) {
    calcMonth -= 1
    calcDay = dayNow - date.day + 30
  } else {
    calcDay = dayNow - date.day
  }

  return {
    year: calcYear,
    month: calcMonth,
    day: calcDay
  }
}

export default ageCalculator