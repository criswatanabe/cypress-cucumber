/// <reference types="cypress" />
const elements = {
    fields:{
        name:"#user",
        email:"#email",
        password:"#password"
    },
    buttons:{
        register:"#btnRegister"
    },
    messages:{
        errorMessage:"#errorMessageFirstName",
        sucessMessage:"#swal2-title",
        boasVindas:"#swal2-html-container"
    }
}
export default {
    clickRegister() {
        cy.get(elements.buttons.register)
            .click()
    },
    checkErrorMessage(message){
        cy.get(elements.messages.errorMessage)
            .should('be.visible')
            .should('have.text', message)
    },
    fillName(name){
        cy.get(elements.fields.name)
            .type(name)
    },
    fillEmail(email){
        cy.get(elements.fields.email)
            .type(email)
    },
    fillPassword(password){
        cy.get(elements.fields.password)
            .type(password)
    },
    checkSucessMessage(name){
        cy.get(elements.messages.sucessMessage)
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        cy.get(elements.messages.boasVindas)
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }
}


