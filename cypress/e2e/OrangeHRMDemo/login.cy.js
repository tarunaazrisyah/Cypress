// Demo of OrangeHRMDemo using Cypress

describe('My First Test', () => {
    it('login to account', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

// Please check the selector as someone might change the language
      cy.contains('username')
      cy.contains('password')
      cy.contains('login')

      cy.get("input[placeholder='Username']").type('Admin')
      cy.get("input[placeholder='Username']").should('have.value', 'Admin')

      cy.get("input[placeholder='Password']").type('admin123')
      cy.get("input[placeholder='Password']").should('have.value', 'admin123')
      
      cy.contains("button[type='submit']").click()
    })
  })

  