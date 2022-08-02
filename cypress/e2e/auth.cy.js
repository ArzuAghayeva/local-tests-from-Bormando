describe('Authentication', () => {
  it('Sign in with valid credentials', () => {
    cy.visit('/user/login')

    cy.get('#normal_login_email')
      .type('test@example.com')
    cy.get('#normal_login_password')
      .type('Qwerty!23')
    cy.get('.login-form-button')
      .click()

    cy.get('.ant-avatar-square')
      .should('be.visible')
    cy.location('pathname')
      .should('include', 'profile')
  })

  it('Sign in with invalid credentials', () => {
    cy.visit('/user/login')

    cy.get('#normal_login_email')
      .type('test@example.com')
    cy.get('#normal_login_password')
      .type('123456')
    cy.get('.login-form-button')
      .click()

    cy.get('.ant-notification-notice-message')
      .should('have.text', 'Auth failed')
  })

  it('Credentials validation', () => {
    cy.visit('/user/login')

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
