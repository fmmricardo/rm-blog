describe('Test for post card', () => {
  it('verify a post contains components', () => {
    cy.visit('http://localhost:8000/')
  })

  it('verify if a post has title', () => {
    cy.get('[data-test=post-title]')
  })

  it('verify if a post has preview text', () => {
    cy.get('[data-test=post-preview]')
  })

  it('verify if a post has date', () => {
    cy.get('[data-test=post-date]')
  })

  it('it has all attributes, title,path, excerpt,date ', () => {
    cy.get('[data-test=card-attributes]').find('key')
  })
})
