export const shows = (state=[], action) => {
  switch(action.type) {
    case 'GET_TV':
    return [...action.shows]
    default:
    return state
  }
}
