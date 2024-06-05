//Still under progress...

describe('My First Test', () => {
    it('login to account', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
      cy.contains('Benutzername')
      cy.contains('Passwort')
      cy.contains('Login')
      
    })
  })

  