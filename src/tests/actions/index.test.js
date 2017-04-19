import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions/index.js'
import fetchMock from 'fetch-mock'


const store = configureMockStore()()

describe('actions', () => {

const mockData = {
  results: [{
    poster_120x171: "http://static-api.guidebox.com/thumbnails_movies_small/27849-575402165-6600297903-9267753171-small-120x171.jpg",
    title: "Harry Potter and the Chamber of Secrets",
    rating: "PG",
    release_date: "2002-11-13",
    overview: "The next installment in the Harry Potter series finds young wizard Harry Potter (Daniel Radcliffe) and his friends Ron Weasley (Rupert Grint) and Hermione Granger (Emma Watson) facing new challenges during their second year at Hogwarts School of Witchcraft and Wizardry as they try to uncover a dark force that is terrorizing the school."
  }]
}

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

const mockResults = [{}]

it('getTV', () => {
  let expectedAction = { type: 'GET_TV', shows: mockData.results}

  store.dispatch(actions.getTv(mockData.results))
  let createdAction = store.getActions()

  expect(createdAction.length).toEqual(1)
  expect(createdAction[0]).toEqual(expectedAction)
})

it('searchResults', () => {
  let expectedAction = { type: 'GET_RESULTS', results: mockData.results}

  store.dispatch(actions.searchResults(mockData.results)
  let createdAction = store.getActions()

  expect(createdAction.length).toEqual(1)
  expect(createdAction[0]).toEqual(expectedAction)
})

it('singleResult', () => {
  let expectedAction = { type: 'GET_SINGLE', summary: mockData.results}

  store.dispatch(actions.singleResult(mockData.results))
  let createdAction = store.getActions()

  expect(createdAction.length).toEqual(3)
  expect(createdAction[0]).toEqual(expectedAction)
})

it('it creates getTV when initiating fetchRandomTv action', () => {
  let expectedAction = { type: 'fetchRandomTv', shows: mockData.results}

  store.dispatch(fetchRandomTv(mockData.results))
  let createdAction = store.getActions()

  expect(createdAction.length).toEqual(1)
  expect(createdAction[0]).toEqual(expectedAction)
})
})
