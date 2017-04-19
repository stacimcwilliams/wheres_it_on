export const shows = (state=[], action) => {
  switch(action.type) {
    case 'GET_TV':
    return [...state,...action.shows]
    default:
    return state
  }
}
