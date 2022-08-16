import BasePage from './base.page'

class ProfilePage extends BasePage {
  get iconAvatar() { return cy.get('.ant-avatar-square') }
}

export default new ProfilePage()
