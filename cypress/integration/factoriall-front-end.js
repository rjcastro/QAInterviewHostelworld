///<reference types="Cypress" />

describe("Test Factoriall elements Front End Elements and behavior", ()=> {
    it("Should be able to check main title text", () => {
        //This will validate that The greatest factorial calculator! is being dislayed
        cy.visit("http://qainterview.pythonanywhere.com/");
        cy.get('.col-md-6 > .margin-base-vertical').should('contain','The greatest factorial calculator!');
    });
    it("Should be able to check Terms and Conditions Link text", () => {
        //This will validate that Terms and Conditions link text is correct
        cy.visit("http://qainterview.pythonanywhere.com/");
        cy.get('[href="/terms"]').should('contain','Terms and Conditions');
    });
    it("Should be able to check Terms and Conditions Link", () => {
        //This will validate that Terms and Conditions link opens the correct page
        cy.visit("http://qainterview.pythonanywhere.com/");
        cy.get('[href="/terms"]').click();
        cy.get('body').should('contain','This is the terms and conditions document. We are not yet ready with it. Stay tuned!');
    });
    it("Should be able to check Privacy Link Text", () => {
        //This will validate that Privacy link text is correct
        cy.visit("http://qainterview.pythonanywhere.com/");
        cy.get('[href="/privacy"]').should('contain','Privacy');
    });
    it("Should be able to check Privacy Link", () => {
        //This will validate that Privacy link opens the correct page
        cy.visit("http://qainterview.pythonanywhere.com/");
        cy.get('[href="/privacy"]').click();
        cy.get('body').should('contain','This is the privacy document. We are not yet ready with it. Stay tuned!');
    });
    it("Should be able to check Calculate button text", () => {
        //This will validate that Calculate button is showing Calculate text
        cy.visit("http://qainterview.pythonanywhere.com/");
        cy.get('#getFactorial').should('contain','Calculate!');
    });
    it("Should be able to receive a correct factorial result", () => {
        //This will validate that the correct factorial is being calculated for #4
        cy.visit("http://qainterview.pythonanywhere.com/");
        cy.get('#number').type("4");
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'The factorial of 4 is: 24')
    });
    it("Should be able to validate an invalid result", () => {
        //This will validate that a text message is returned when entering a non integer value
        cy.visit("http://qainterview.pythonanywhere.com/");
        cy.get('#number').type("x");
        cy.get('#getFactorial').click();
        cy.get('#resultDiv').should('contain', 'Please enter an integer')
    });
})