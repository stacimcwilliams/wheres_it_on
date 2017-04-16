export const summary = (state = [], action) => {
  console.log(action)

  switch(action.type) {
    case 'GET_SINGLE':
      return [...state, ...action.summary]
    default:
      return state
  }
}
