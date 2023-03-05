// TODO: create a better solution for this
// idk if it's really need tbh
export const readableElapsed = (sec: number) => {
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const month = 30 * day
  const year = 365 * day

  if (sec < minute) {
    return String(sec) + ' seconds'
  } else if (sec < hour) {
    const minutes = Math.ceil(sec / minute)
    return String(minutes) + ' minute' + (minutes === 1 ? '' : 's') + ' ago'
  } else if (sec < day) {
    const hours = Math.ceil(sec / hour)
    return String(hours) + ' hour' + (hours === 1 ? '' : 's') + ' ago'
  } else if (sec < month) {
    const days = Math.ceil(sec / day)
    return String(days) + ' day' + (days === 1 ? '' : 's') + ' ago'
  } else if (sec < year) {
    const months = Math.ceil(sec / month)
    return String(months) + ' month' + (months === 1 ? '' : 's') + ' ago'
  } else {
    const years = Math.ceil(sec / year)
    return String(years) + ' year' + (years === 1 ? '' : 's') + ' ago'
  }
}
