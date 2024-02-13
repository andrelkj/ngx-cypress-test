import { navigateTo } from "../support/page_objects/navigationPage"

describe('Test With Page Objects', () => {

  beforeEach('open application', () => {
    cy.visit('/')
  })

  it('verify navigation across the pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
    navigateTo.toastrPage()
    navigateTo.smartTablePage()
    navigateTo.tooltipPage()
  })
})