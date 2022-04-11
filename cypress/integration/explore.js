let userInfo

describe('Explore Demo Apps and Tutorials', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
        cy.fixture('../fixtures/userDetails.json').then((user) => {
            userInfo = user
        })
    })

    it('CreateAccount', () => {
        cy.createAccount(userInfo.email, userInfo.password)
    })

    it('Login', () => {
        cy.login(userInfo.email, userInfo.password)
    })
    it('Tutorials: How do I create an app', () => {
        cy.get('body').then($element => {
            if ($element.find('#onetrust-accept-btn-handler').length > 0) {
                cy.get('#onetrust-accept-btn-handler').click()
            }
        })
        cy.get('.navTertiary__trigger > .navTertiary__hd').click()
        cy.get('.navTertiary__menu > .navTertiary__links > :nth-child(2) > .navTertiary__link > .navTertiary__hd').click()
        cy.wait(5000)
        cy.get('[data-testid="gettingStarted"]').click()
        cy.get('[data-testid="resource-card-training-video-1"] > .hubseed-314 > .hubseed-146 > .hubseed-141 > .hubseed-139 > .hubseed-273 > span').contains('How do I create an app?')
        cy.get('[data-testid="resource-card-training-video-1"]').click()
    })
    it('Tutorials: How do I load data into an app', () => {
        cy.get('body').then($element => {
            if ($element.find('#onetrust-accept-btn-handler').length > 0) {
                cy.get('#onetrust-accept-btn-handler').click()
            }
        })
        cy.get('.navTertiary__trigger > .navTertiary__hd').click()
        cy.get('.navTertiary__menu > .navTertiary__links > :nth-child(2) > .navTertiary__link > .navTertiary__hd').click()
        cy.wait(5000)
        cy.get('[data-testid="gettingStarted"]').click()
        cy.get('[data-testid="resource-card-training-video-2"] > .hubseed-314 > .hubseed-146 > .hubseed-141 > .hubseed-139 > .hubseed-273 > span').contains('How do I load data into an app?')
        cy.get('[data-testid="resource-card-training-video-2"]').click()
    })
    it('Demo: Visualization Showcase', () => {
        cy.get('body').then($element => {
            if ($element.find('#onetrust-accept-btn-handler').length > 0) {
                cy.get('#onetrust-accept-btn-handler').click()
            }
        })
        cy.get('.navTertiary__trigger > .navTertiary__hd').click()
        cy.get('.navTertiary__menu > .navTertiary__links > :nth-child(2) > .navTertiary__link > .navTertiary__hd').click()
        cy.wait(5000)
        cy.get('[data-testid="gettingStarted"]').click()
        cy.get('[data-testid="resource-card-604689375e7884fe1d585de6"] > .hubseed-314 > .hubseed-139 > .hubseed-109').contains('Demo App - Visualization Showcase')
        cy.get('[data-testid="resource-card-604689375e7884fe1d585de6"] > .hubseed-52 > .hubseed-311').click()
        cy.get('[data-testid="back-to-hub-button"]').click()
        cy.get('.widget__header__title').contains('Your apps')
        cy.get('[data-testmeta="Demo App - Visualization Showcase"]').contains('Demo App - Visualization Showcase')
        cy.get('[data-testid="gettingStarted"]').click()
    })
    it('Demo: Beginners tutorial', () => {
        cy.get('body').then($element => {
            if ($element.find('#onetrust-accept-btn-handler').length > 0) {
                cy.get('#onetrust-accept-btn-handler').click()
            }
        })
        cy.get('.navTertiary__trigger > .navTertiary__hd').click()
        cy.get('.navTertiary__menu > .navTertiary__links > :nth-child(2) > .navTertiary__link > .navTertiary__hd').click()
        cy.wait(5000)
        cy.get('[data-testid="gettingStarted"]').click()
        cy.get('[data-testid="resource-card-61536ea3987110e213d64172"] > .hubseed-314 > .hubseed-139 > .hubseed-109').contains('Demo App - Beginner\'s tutorial')
        cy.get('[data-testid="resource-card-61536ea3987110e213d64172"] > .hubseed-308 > .hubseed-311').click()
        cy.get('[data-testid="back-to-hub-button"]').click()
        cy.get('.widget__header__title').contains('Your apps')
        cy.get('[data-testmeta="Demo App - Beginner\'s tutorial"]').contains('Demo App - Beginner\'s tutorial')
        cy.get('[data-testid="gettingStarted"]').click()
    })
    it('Analyze sample data', () => {
        cy.get('body').then($element => {
            if ($element.find('#onetrust-accept-btn-handler').length > 0) {
                cy.get('#onetrust-accept-btn-handler').click()
            }
        })
        cy.get('.navTertiary__trigger > .navTertiary__hd').click()
        cy.get('.navTertiary__menu > .navTertiary__links > :nth-child(2) > .navTertiary__link > .navTertiary__hd').click()
        cy.wait(5000)
        cy.get('[data-testid="gettingStarted"]').click()
        cy.get('#welcome-sampledata').click()
        cy.wait(5000)
        cy.url().should('include', '/state/analysis')
        cy.wait(5000)
        //cy.get('[data-testid="cognitiveadvisor-tour-popover-exit"] > .TdHqDP-sense-client1162 > i > svg > path').click()
        cy.get('[data-testid="cao_field_City_item_checkbox"]').check()
        cy.get('[data-testid="cao_field_Sales_item_checkbox"]').check()
        cy.wait(10000)
        cy.get('[data-testid="cognitiveadvisor-tour-popover-exit"]').click()
    })

    afterEach(() => {
        //Code to Handle the Sesssions in cypress.
        //Keep the Session alive when you jump to another test
        let str = [];
        cy.getCookies().then((cook) => {
            cy.log(cook);
            for (let l = 0; l < cook.length; l++) {
                if (cook.length > 0 && l == 0) {
                    str[l] = cook[l].name;
                    Cypress.Cookies.preserveOnce(str[l]);
                } else if (cook.length > 1 && l > 1) {
                    str[l] = cook[l].name;
                    Cypress.Cookies.preserveOnce(str[l]);
                }
            }
        });
    })
    after(() => {
        cy.clearCookies()
        cy.logout()
    })
})