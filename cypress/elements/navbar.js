class Navbar {
  get linkCourses() { return cy.get('[data-qa="topmenu-Courses"]') }
  get linkInterviewQuestions() { return cy.get('[data-qa="topmenu-Interview Questions"]') }
  get linkDiary() { return cy.get('[data-qa="topmenu-Diary"]') }
  get linkChallenges() { return cy.get('[data-qa="topmenu-Challenges"]') }
}

export default new Navbar()
