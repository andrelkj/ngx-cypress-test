function selectDayFromCurrent(day) {
  // Generates date and assign to a variable
  let date = new Date();
  date.setDate(date.getDate() + day);

  // Handling day, month and year dynamically
  let futureDay = date.getDate();
  let futureMonth = date.toLocaleDateString("en-US", { month: "short" });
  let futureYear = date.getFullYear();

  // Convert the date to string
  let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`;

  //select the day depending on the actual month
  cy.get("nb-calendar-navigation")
    .invoke("attr", "ng-reflect-date")
    .then((dateAtrribute) => {
      if (
        !dateAtrribute.includes(futureMonth) ||
        !dateAtrribute.includes(futureYear)
      ) {
        cy.get('[data-name="chevron-right"]').click();
        selectDayFromCurrent(day);
      } else {
        cy.get(".day-cell")
          .not(".bounding-month")
          .contains(futureDay)
          .click();
      }
    });
  return dateToAssert;
}

export class DatepickerPage{

  selectCommonDatepickerDateFromToday(dayFromToday){
    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();

        let dateToAssert = selectDayFromCurrent(dayFromToday);
        cy.wrap(input).invoke("prop", "value").should("contain", dateToAssert);
        cy.wrap(input).should("have.value", dateToAssert);
      });
    }

  selectDatepickerWithRangeFromToday(firstDay, secondDay){
    cy.contains("nb-card", "Datepicker With Range")
    .find("input")
    .then((input) => {
      cy.wrap(input).click();

      let dateToAssertFirst = selectDayFromCurrent(firstDay);
      let dateToAssertSecond = selectDayFromCurrent(secondDay);
      const finalDate = dateToAssertFirst +' - '+ dateToAssertSecond
      cy.wrap(input).invoke("prop", "value").should("contain", finalDate);
      cy.wrap(input).should("have.value", finalDate);
    });
  }
}
export const onDatePickerPage = new DatepickerPage()
