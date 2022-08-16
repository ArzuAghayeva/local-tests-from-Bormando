class BasePage {
  open(path) {
    return cy.visit(path)
  }
}

export default BasePage
