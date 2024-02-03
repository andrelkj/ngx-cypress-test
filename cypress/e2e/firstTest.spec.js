/// <reference types="cypress" />

describe("First test suite", () => {

  it("first test", () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //by Tag name
    cy.get('input')

    //by ID
    cy.get('#inputEmail1')

    //by Class value
    cy.get('.input-full-width')

    //by Attribute name
    cy.get('[placeholder="Email"]')

    //by entire Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by two atrributes
    cy.get('[placeholder="Email"][fullwidth]')

    //by tag, atrribute id and class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    //by cypress test ID
    cy.get('[data-cy="imputEmail1"]')
  });
})
