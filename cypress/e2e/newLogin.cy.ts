describe('prueba 1', () => {
  const user = "123@gmail.com";
  const pwd = "1111"
  it('passes', () => {
    cy.visit('http://localhost:3000/index')
    cy.get('#user').type(user);
    cy.get('#pwd').type(pwd);
    cy.get('form').submit()
  })
})

