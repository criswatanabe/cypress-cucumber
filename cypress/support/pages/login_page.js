//3 - criar as ações da page
/// <reference types="cypress" />

const elements = {
    fields:{
        email:"#user",
        password:"#password"
    },
    buttons:{
        login:"#btnLogin"
    },
    messages:{
        error:".invalid_input",
        loginSucess:"#swal2-title",
        boasVindas:"#swal2-html-container"
    }
}
export default{
    clickBtnLogin(){
        cy.get(elements.buttons.login)
            .click()
     },
     checkErrorMessage(message){
        cy.get(elements.messages.error)
            .should('be.visible')
            .should('have.text', message)
     },
     fillEmail(email){
        cy.get(elements.fields.email)
            .type(email)
     },
     fillPassword(password){
        cy.get(elements.fields.password)
            .type(password)
     },
     checkSucessMessage(email){
        cy.get(elements.messages.loginSucess)
            .should('be.visible')
            .should('have.text', 'Login realizado')
        cy.get(elements.messages.boasVindas)
           .should('be.visible')
           .should('have.text', `Olá, ${email}`)
    }
 
}


