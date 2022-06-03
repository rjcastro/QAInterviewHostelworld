///<reference types="Cypress" />

describe("Test Factoriall API response", () => {
    var result;
    it("Validate status code for API", () => {
        result = cy.request("http://qainterview.pythonanywhere.com/factorial")
        result.its("status").should("equal", 200)
    });
    
    it("Validate factorial API response for number 4", () => {
        //API Post request to calculate factorial of #4
        cy.request({
            method: "POST",
            url: "http://qainterview.pythonanywhere.com/factorial",
            form: true,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: 'number=4'
        }).then(response => {
            expect(response.status).to.eql(200);
            expect(response.body).has.property("answer", 24)
        })
    })

    it("Validate factorial API response for number 5", () => {
        //API Post request to calculate factorial of #5
        cy.request({
            method: "POST",
            url: "http://qainterview.pythonanywhere.com/factorial",
            form: true,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: 'number=5'
        }).then(response => {
            expect(response.status).to.eql(200);
            expect(response.body).has.property("answer", 120)
        })
    })
})