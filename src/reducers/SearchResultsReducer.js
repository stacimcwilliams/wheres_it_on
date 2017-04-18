export const results = (state=[], action) => {
<<<<<<< HEAD
  switch(action.type) {
    case 'GET_RESULTS':
      return [...action.results]
=======
  console.log('results reducer', action)
  switch(action.type) {
    case 'GET_RESULTS':
      return  [...action.results]
>>>>>>> sm
    default:
      return state
  }
}
