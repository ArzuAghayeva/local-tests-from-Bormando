import BasePage from './base.page'

class LoginPage extends BasePage {
  get inputEmail() { return cy.get('#normal_login_email') }
  get inputPassword() { return cy.get('#normal_login_password') }
  get buttonSignIn() { return cy.get('.login-form-button') }
  get toast() { return cy.get('.ant-notification-notice-message') }
  get emailValidation() { return cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]') }
  get passwordValidation() { return cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_password"]]//div[@class="ant-form-item-explain-error"]') }

  open() {
    return super.open('/user/login')
  }

  login(email, password) {
    this.inputEmail.type(email)
    this.inputPassword.type(password)
    this.buttonSignIn.click()
  }
}

export default new LoginPage()
