// Just a draft first

describe('My First Test', () => {
    it('login to account', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
      cy.contains('Benutzername')
      cy.contains('Passwort')
      cy.contains('Login')

      cy.get('Benutzername').type('Admin')
      cy.get('Benutzername').should('have.value', 'Admin')

      cy.get('Passwort').type('admin123')
      cy.get('Passwort').should('have.value', 'admin123')
      
      cy.contains('Login').click()
    })
  })

  