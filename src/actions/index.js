import thunk from 'redux-thunk';

export const getTv = shows => {
  return {
    type: 'GET_TV',
    shows
  }
}

export const getContent = content => {
  return {
    type: 'GET_CONTENT',
    content
  }
}

export const fetchRandomTv = () => {
  return dispatch => {
    fetch('http://api-public.guidebox.com/v2/movies/135934/images?api_key=4880f91cb81427902043ea748366f22d56311e96')
    .then((response) => {
      return response.json()
    })
    .then((shows) => {
      dispatch(getTv(shows.results))
    })
  }
}

export const fetchSearchContent = () => {
  return dispatch => {
    fetch('http://api-public.guidebox.com/v2/search?api_key=4880f91cb81427902043ea748366f22d56311e96&type=movie&field=title&query=Terminator')
    .then((response) => {
      return response.json()
    })
    .then((content) => {
      dispatch(getContent(content.results))
      console.log(content.results);
    })
  }
}
