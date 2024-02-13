import { onDatePickerPage } from "../support/page_objects/datepickerPage";
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage";
import { navigateTo } from "../support/page_objects/navigationPage";
import { onSmartTablePage } from "../support/page_objects/smartTablePage";

describe("Test With Page Objects", () => {
  beforeEach("open application", () => {
    cy.visit("/");
  });

  it("verify navigation across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.datepickerPage();
    navigateTo.toastrPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });

  it.only("should submit Inline and Basic form and select tomorrow date in the calendar", () => {
    navigateTo.formLayoutsPage();
    onFormLayoutsPage.submitInlineFormWithNameAndEmail(
      "Artem",
      "test@test.com"
    );
    onFormLayoutsPage.submitInlineFormWithNameAndPassword(
      "test@test.com",
      "password"
    );
    navigateTo.datepickerPage();
    onDatePickerPage.selectCommonDatepickerDateFromToday(1);
    onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14);
    navigateTo.smartTablePage()
    onSmartTablePage.addNewRecordwithFirstAndLastName('Artem', 'Bondar')
    onSmartTablePage.updateAgeByFirstName('Artem', '35')
    onSmartTablePage.deleteRowByIndex(1)
  });
});
