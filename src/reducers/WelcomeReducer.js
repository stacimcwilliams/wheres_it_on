export const shows = (state=[], action) => {
  switch(action.type) {
    case 'GET_TV':
    return [...state, ...action.shows]
    case 'GET_CONTENT':
    return [...state, ...action.content]
    default:
    return state
  }
}
