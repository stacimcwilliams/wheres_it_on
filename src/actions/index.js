export const fetchRandomTv = () => {
  return dispatch => {
    fetch('http://api-public.guidebox.com/v2/movies/135934/images?api_key=4880f91cb81427902043ea748366f22d56311e96')
  .then((response) => {
    return response.json()
  })
  .then((tv) => {
    dispatch(getTv(tv.results))
  })
  }
}


export const getTv = tv => {
  return {
    type: 'GET-TV',
    tv
  }
}
