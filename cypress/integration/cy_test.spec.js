import React from "react";


describe('Testing Routes', () => {
        it('should open dashboard', () => {
            cy.visit('/');
        });
        it('should open integration form', () => {
            cy.visit('/integration/configuration/new');
        });
        it('should open integration list', () => {
            cy.visit('/integration/configuration/list');
        });
        it('should open log', () => {
            cy.visit('/log');
        });
        it('should open support', () => {
            cy.visit('/support');
        });
        it('renders learn react link', () => {
            cy.visit('/')
            cy.get('#IntegrasjonsoversiktButton').click()
        });
}

)