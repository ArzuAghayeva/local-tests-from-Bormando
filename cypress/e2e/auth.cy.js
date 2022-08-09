describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/user/login')
  })

  it('Sign in with valid credentials', () => {
    cy.get('#normal_login_email')
      .type(Cypress.env('EMAIL'))
    cy.get('#normal_login_password')
      .type(Cypress.env('PASSWORD'))
    cy.get('.login-form-button')
      .click()

    cy.get('.ant-avatar-square')
      .should('be.visible')
    cy.location('pathname')
      .should('include', 'profile')
  })

  it('Sign in with invalid credentials', () => {
    cy.get('#normal_login_email')
      .type(Cypress.env('EMAIL'))
    cy.get('#normal_login_password')
      .type('123456')
    cy.get('.login-form-button')
      .click()

    cy.get('.ant-notification-notice-message')
      .should('have.text', 'Auth failed')
  })

  it('Credentials validation', () => {
    cy.get('#normal_login_email')
      .type('test')

    cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
      .should('have.text', '\'email\' is not a valid email')

    cy.get('#normal_login_email')
      .clear()

    cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
      .should('have.text', 'Required')

    cy.get('#normal_login_password')
      .type('test')
      .clear()

    cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_password"]]//div[@class="ant-form-item-explain-error"]')
      .should('have.text', 'Required')
  })
})
