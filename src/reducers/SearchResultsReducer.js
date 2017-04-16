export const results = (state=[], action) => {
  console.log(action)
  switch(action.type) {
    case 'GET_RESULTS':
      return [...state, ...action.results]
    default:
      return state
  }
}
