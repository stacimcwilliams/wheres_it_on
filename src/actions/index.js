// export const getTv = shows => {
//   return {
//     type: 'GET_TV',
//     shows
//   }
// }

export const getContent = content => {
  return {
    type: 'GET_CONTENT',
    content
  }
}

export const searchResults = results => {
  return {
    type: 'GET_RESULTS',
    results
  }
}

export const singleResult = summary => {
  return {
    type: 'GET_SINGLE',
    summary
  }
}
// 
// export const fetchRandomTv = () => {
//   return dispatch => {
//     fetch('http://api-public.guidebox.com/v2/movies/135934/images?api_key=1f743328a3b39c6777948b0dc51a1f42a0f86894')
//     .then((response) => {
//       return response.json()
//     })
//     .then((shows) => {
//       dispatch(getTv(shows.results))
//     })
//   }
// }

export const fetchSearchContent = (query) => {
  return dispatch => {

    fetch(`http://api-public.guidebox.com/v2/search?api_key=1f743328a3b39c6777948b0dc51a1f42a0f86894&type=movie&field=title&query=${query}`)
    .then((response) => {
      return response.json()
    })
    .then((content) => {
      dispatch(searchResults(content.results))
    })
  }
}

export const fetchSingleResult = (showId) => {
  return dispatch => {
    fetch(`http://api-public.guidebox.com/v2/movies/${showId}?api_key=1f743328a3b39c6777948b0dc51a1f42a0f86894`)
    .then((response) => {
      return response.json()
    })
    .then((summary) => {
      dispatch(singleResult(summary))
    })
  }
}
