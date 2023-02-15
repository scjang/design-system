export const idGenerator = (prefix = 'id') => {
  const number = window.crypto.getRandomValues(new Int8Array(1))[0]
  return `${prefix}-${number < 0 ? number * -1 : number}`
}
