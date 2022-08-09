before(() => {
  cy.request(
    'POST',
    `${Cypress.env('API_BASE_URL')}/user/login`,
    {email: Cypress.env('EMAIL'), password: Cypress.env('PASSWORD')}
  ).then((response) => {
    Cypress.env('TOKEN', response.body.payload.token)
    Cypress.env('USER_ID', response.body.payload.userId)
  })
})
