export const tv = (state=[], action) => {
  switch(action.type) {
    case 'GET_TV':
    return [...state, ...action.tv]
    default:
    return state
  }
}
