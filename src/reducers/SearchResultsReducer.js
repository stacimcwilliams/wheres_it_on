export const results = (state=[], action) => {
  switch(action.type) {
    case 'GET_RESULTS':
    return [...state, ...action]
    default:
    return state
  }
}
