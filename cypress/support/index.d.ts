declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Log in using token & user id from auth http request
     * @example
     * cy.login('token', 'userId')
     */
    login(token: string, userId: string): Chainable<any>
  }
}
