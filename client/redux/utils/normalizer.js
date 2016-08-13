export const normalizeZipcode = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  return onlyNums.slice(0,5)
}
export const normalizePhone = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return onlyNums + '-'
    }
    if (onlyNums.length === 6) {
      return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-'
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 6) {
    return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3)
  }
  return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10)
}

export const normalizeSSN = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return onlyNums + '-'
    }
    if (onlyNums.length === 5) {
      return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-'
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 5) {
    return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3)
  }
  return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 5) + '-' + onlyNums.slice(5, 9)
}
