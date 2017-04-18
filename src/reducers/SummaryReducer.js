export const summary = (state = [], action) => {
<<<<<<< HEAD

=======
>>>>>>> sm
  switch(action.type) {
    case 'GET_SINGLE':
      return [action.summary]
    default:
      return state
  }
}
