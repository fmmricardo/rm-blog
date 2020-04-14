describe('Test post page ', () => {
  before(function() {
    cy.visit('http://localhost:8000/')
  })

  it('verify the post title open the artigle page', () => {
    cy.get('[data-test=post-title]')
      .first()
      .click()
  })

  it('verify if a post has title', () => {
    cy.get('[data-test=post-title]')
      .first()
      .contains(
        'Doing better in just 9 weeks. The importance of being challenged.'
      )
  })

  it('verify if a post has an image', () => {
    cy.get('[data-test=post-body]')
  })

  it('verify if back to homepage ling is working', () => {
    cy.get('[data-test=post-home-link]')
      .contains('Home')
      .first()
      .click()
      .url()
      .should('include', '/')
  })
})

describe('Visit next post ', () => {
  before(function() {
    cy.visit('http://localhost:8000/content/posts/9-weeks-plan')
  })

  it('verify the post title open the artigle page', () => {
    cy.get('[data-test=post-navigation-links]')
      .click()
      .visit('http://localhost:8000/content/posts/9-weeks-plan')
      .url()
      .should('include', '/content/posts/9-weeks-plan')
  })
})
