export const transformDate = (data: string): string => {
  const dataObj = new Date(data)

  let day

  if (dataObj.getDate() > 9) day = dataObj.getDate().toString()
  if (dataObj.getDate() <= 9) day = `0${dataObj.getDate().toString()}`
  let month

  if (dataObj.getMonth() + 1 > 9) month = (dataObj.getMonth() + 1).toString()
  if (dataObj.getMonth() + 1 <= 9) month = `0${(dataObj.getMonth() + 1).toString()}`
  let year = dataObj.getFullYear().toString()

  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  }

  return `${day} ${months[month as keyof typeof months]} ${year}`
}
