export const results = (state=[], action) => {
  switch(action.type) {
    case 'GET_RESULTS':
      return  [...action.results]
    default:
      return state
  }
}
