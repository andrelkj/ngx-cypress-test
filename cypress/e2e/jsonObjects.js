/// <reference types="cypress" />

describe("JSON objects", () => {
  it("Json objects", () => {
    cy.openHomePage();

    const simpleObject = { key: "value", key2: "value2" };

    const simpleArrayOfValues = ["one", "two", "three"];

    const arrayOfObjects = [
      { key: "values" },
      { key2: "values2" },
      { key3: "value3" },
    ];

    const typesOfData = { string: "this is a string", number: 10 };

    const mix = {
      FirstName: "Artem",
      LastName: "Bondar",
      Age: 35,
      Students: [
        {
          firstName: "Sara",
          lastName: "Conor",
        },
        {
          firstName: "Bruce",
          lastName: "Willis",
        },
      ],
    };

    //interacting with json objects
    console.log(simpleObject.key2); //by value
    console.log(simpleObject["key2"]); //by name
    console.log(simpleArrayOfValues[1]); //from arrays with index
    console.log(arrayOfObjects[2].key3);
    console.log(mix.Students[1].lastName);

    const lastNameOfSecondStudent = mix.Students[1].lastName;
  });
});
