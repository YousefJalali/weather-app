describe('Search', () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000/')

    // cy.intercept("GET", "/search*").as("searchResult");
  })

  it('should navigate to search page', () => {
    const query = 'doha'
    //@ts-ignore
    cy.getBySel('search-input').type(query)
    //@ts-ignore
    cy.getBySel('search-loading').should('be.visible')
    //@ts-ignore
    cy.getBySel('search-result').should('be.visible')
    // cy.location('pathname').should('eq', `/search?q=${query}`)
  })
})

export {}
