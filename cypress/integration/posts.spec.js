describe('input form', () => {
  it('should verify a post contains components', () => {
    cy.visit('http://localhost:8000/')
  })

  it('should verify if a post has title', () => {
    cy.get('[data-test=post-title]')
  })

  it('should verify if a post has preview text', () => {
    cy.get('[data-test=post-preview]')
  })

  it('should verify if a post has date', () => {
    cy.get('[data-test=post-date]')
  })

  it('should has all attributes,title,path, excerpt,date ', () => {
    cy.get('[data-test=card-attributes]').contains('id')
  })
})

describe('verify if the links has all attributes', () => {
  it('should get the link attributes', () => {
    cy.get('[data-test="post-title"]')
  })
})
