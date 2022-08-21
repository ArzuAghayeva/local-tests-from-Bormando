describe('Profile', () => {
  beforeEach(() => {
    cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
    cy.visit(`/profile/${Cypress.env('USER_ID')}`)
  })

  it('Daily report creation', () => {
    const timestamp = new Date().getTime()
    const description = `${timestamp} 123456789012345678901234567890`
    cy.get('[data-qa="dailyReportsBtn"]')
      .click()
    cy.get('input[value="help_classmates"]')
      .click()
    cy.get('[id="labels.help_classmates.hours"]')
      .type('1')
    cy.get('#morale')
      .click()
    cy.get('.ant-select-item[title="5"]')
      .click()
    cy.get('textarea.ant-input')
      .type(description)
    cy.get('[type="submit"]')
      .click()

    cy.xpath(`//div[@class="ant-row mb-4"][contains(text(), "${timestamp}")]`)
      .should('be.visible')
  })
})
