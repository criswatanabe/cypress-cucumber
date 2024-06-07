// 2 - transformar o gherkin em método/ação
/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

import { faker } from '@faker-js/faker';

import 'cypress-mochawesome-reporter/cucumberSupport';

const email = faker.internet.email()


Given("I am on login screen", () => {
    home_page.accessLogin()
})

Given("I fill e-mail", () => {
    login_page.fillEmail(email)
})

Given("I fill my credencials", () => {
    login_page.fillEmail(email)
    login_page.fillPassword('123456')
})

When("I click on Login", () => {
    login_page.clickBtnLogin()
})

Then("I see the message {string}", (message) => {
    login_page.checkErrorMessage(message)

})

Then("I see success message", (message) => {
     login_page.checkSucessMessage(email)
})