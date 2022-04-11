let LOCAL_STORAGE_MEMORY = {};
Cypress.Commands.add('login', (email, password) => {
    cy.get('body').then($element => {
        if ($element.find('#onetrust-accept-btn-handler').length > 0) {
            cy.get('#onetrust-accept-btn-handler').click()
        }
    })
    cy.get('.navTertiary__trigger > .navTertiary__hd').click()
    cy.get('.auth0-lock-input-email > .auth0-lock-input-wrap > .auth0-lock-input').type(email)
    cy.get('.auth0-lock-input-show-password > .auth0-lock-input-block > .auth0-lock-input-wrap > .auth0-lock-input').type(password)
    cy.get('.auth0-label-submit').click()
    cy.wait(5000)
})

Cypress.Commands.add('createAccount', (email, password) => {
    cy.get('body').then($element => {
        if ($element.find('#onetrust-accept-btn-handler').length > 0) {
            cy.get('#onetrust-accept-btn-handler').click()
        }
    })
    cy.get('.navTertiary__list > :nth-child(2) > .js-stickySecondaryNav-clone > .btn').click()
    cy.get('#fxb_4f7ad21e-26d6-4492-95d8-62b8f63c2afe_Fields_6bc8d0b9-a8ca-4288-81ea-537a182e617e__Value').type('Deepa')
    cy.get('#fxb_4f7ad21e-26d6-4492-95d8-62b8f63c2afe_Fields_788809b0-d7dd-403e-863c-e028896d1223__Value').type('Hiras')
    cy.get('#fxb_4f7ad21e-26d6-4492-95d8-62b8f63c2afe_Fields_316d841f-6c39-411f-aedc-4cbd3d96024f__Value').type(email)
    cy.get('[value="Next"]').click()
    cy.get('#fxb_4f7ad21e-26d6-4492-95d8-62b8f63c2afe_Fields_d6bf9150-54d2-4145-939a-da5fa0bae383__Value').type('Qlik')
    cy.get('#fxb_4f7ad21e-26d6-4492-95d8-62b8f63c2afe_Fields_928d3b39-a0de-4752-9d56-3e6f62b899b7__Value').type('Software Tester')
    cy.get('#fxb_4f7ad21e-26d6-4492-95d8-62b8f63c2afe_Fields_fc0a1d63-dd01-49a3-8f1e-6f69ca834911__Value').select('Sweden')

    cy.get('[value="Activate My Trial"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.MuiAvatar-img').click()
    cy.get('#app-switcher-logout').click()
})


