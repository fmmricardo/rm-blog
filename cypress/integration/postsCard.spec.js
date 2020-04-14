describe('Test for post card', () => {
  before(function() {
    cy.visit('http://localhost:8000/')
  })

  it('verify if a post has title', () => {
    cy.get('[data-test=post-title]')
      .first()
      .contains(
        'Doing better in just 9 weeks. The importance of being challenged.'
      )
  })

  it('verify if a post has preview text', () => {
    cy.get('[data-test=post-preview]')
      .first()
      .contains(
        'The challenge came after a 1-on-1 conversation and was the type of guidance that I had been seeking for a while. To put it briefly, the 9-week plan consists of establishing personal or professional goals during this period.'
      )
  })

  it('verify if a post has title', () => {
    cy.get('[data-test=post-title]').should('have.attr', 'href')
  })

  it('verify if a post has date', () => {
    cy.get('[data-test=post-date]')
      .first()
      .contains('December 15, 2019')
  })
})
