export const summary = (state = [], action) => {
  switch(action.type) {
    case 'GET_SINGLE':
    return [...state, ...action.results]
    default:
    return state
  }
}
