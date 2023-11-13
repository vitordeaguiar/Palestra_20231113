/// <reference types="cypress" />

describe('Busca teste bitcoin', ()=>{
    it.only('teste de busca com enter',()=>{
        cy.visit('https://duckduckgo.com');
        cy.get('#search_form_input_homepage').type('Bitcoin{enter}');
        cy.get('.nrn-react-div').should('have.length',10);
    })


    it('teste de busca com lupa', ()=>{
        cy.visit('https://duckduckgo.com');
        cy.get('#search_form_homepage').type('Bitcoin');
        cy.get('#search_button_homepage').click();
        cy.get('.nrn-react-div').should('have.length', 10);
    })
    
})