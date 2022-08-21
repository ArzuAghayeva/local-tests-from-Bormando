import MainPage from '../pages/app/main.page'

describe('Navigation', () => {
  before(() => {
    cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
    cy.reload()
  })

  it('Courses page opens', () => {
    MainPage.navbar.linkCourses.click()
    cy.location('pathname')
      .should('include', 'course')
  })

  it('Interview Questions page opens', () => {
    MainPage.navbar.linkInterviewQuestions.click()
    cy.location('pathname')
      .should('include', 'flash')
  })
})
