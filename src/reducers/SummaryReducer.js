export const summary = (state = [], action) => {
  console.log(action)

  switch(action.type) {
    case 'GET_SINGLE':
      return [action.summary]
    default:
      return state
  }
}
