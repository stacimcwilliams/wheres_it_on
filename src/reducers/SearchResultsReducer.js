export const results = (state=[], action) => {
  console.log('results reducer', action)
  switch(action.type) {
    case 'GET_RESULTS':
      return  [...action.results]
    default:
      return state
  }
}
