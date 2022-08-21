import AppPage from './app.page'

class ProfilePage extends AppPage {
  get iconAvatar() { return cy.get('.ant-avatar-square') }
}

export default new ProfilePage()
