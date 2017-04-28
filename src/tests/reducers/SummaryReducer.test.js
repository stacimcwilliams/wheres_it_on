import { summary } from '../../reducers/SummaryReducer';


describe('testing SummaryReducer', () => {


  const mockData = {
    results: [{
      poster_120x171: "http://static-api.guidebox.com/thumbnails_movies_small/27849-575402165-6600297903-9267753171-small-120x171.jpg",
      title: "Harry Potter and the Chamber of Secrets",
      rating: "PG",
      release_date: "2002-11-13",
      overview: "The next installment in the Harry Potter series finds young wizard Harry Potter (Daniel Radcliffe) and his friends Ron Weasley (Rupert Grint) and Hermione Granger (Emma Watson) facing new challenges during their second year at Hogwarts School of Witchcraft and Wizardry as they try to uncover a dark force that is terrorizing the school."
    }]
  }

  it('should return an empty array as a default', () => {
    expect(summary(undefined, {})).toEqual([])
  })

  it('should get a summary', () => {
    expect(summary([], {
      type: 'GET_SINGLE',
      summary: mockData.results
    }))
    .toEqual([mockData.results])
  })

})
