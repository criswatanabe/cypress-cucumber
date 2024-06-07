// 2 - transformar o gherkin em método/ação
/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_user from "../pages/register_user_page"
import { faker } from '@faker-js/faker';

import 'cypress-mochawesome-reporter/cucumberSupport';

const name_person = faker.person.fullName()
const first_name = faker.person.firstName()
const email_user = faker.internet.email()

Given("I am on Register Screen", () => {
    home_page.accessRegister()
})

Given("I fill name", () => {
    register_user.fillName(name_person)
})

Given("I fill e-mail {string}", (email) => {
    register_user.fillEmail(email)
})

Given("I fill my datas of register", () => {
    register_user.fillName(name_person)
    register_user.fillEmail(email_user)
    register_user.fillPassword('123456')
})

When("I click on Register", () => {
    register_user.clickRegister()
})

Then("I see the message {string} on Register", (message) => {
    register_user.checkErrorMessage(message)

})

Then("I see the message sucess message on Register", () => {
    register_user.checkSucessMessage(name_person)

})
