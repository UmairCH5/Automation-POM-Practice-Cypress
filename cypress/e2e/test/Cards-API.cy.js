describe('flow of API calls', ()=> {
    let deckId
    it('shuffle the deck', ()=> {
        cy.request('GET', 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then((Response) => {
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
            deckId = Response.body.deck_id
        })
    })
    it('draw 2 cards', ()=> {
        cy.request('GET', `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`).then((Response) =>{
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
        })
    })
    it('reshuffle the deck', () => {
        cy.request('GET', `https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/`).then((Response) => {
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
        })
    })
    it('a new deck', () => {
        cy.request('GET', 'https://www.deckofcardsapi.com/api/deck/new/').then((Response) => {
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
        })
    })
    it('A partial deck', () => {
        cy.request('GET', 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH').then((Response) => {
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
        })
    })
    it('add to piles', () => {
        cy.request('GET', `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/discard/add/?cards=AS,2S`).then((Response)=> {
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
        })
    })
    it('shuffle the pile', () => {
        cy.request('GET', `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/discard/shuffle/`).then((Response)=> {
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
        })
    })
    it('List the pile', () => {
        cy.request('GET', `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/discard/list/`).then((Response) =>{
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
        })
    })
    // it('draw from piles', () => {
    //      cy.request('GET', `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/discard/draw/random/`).then((Response)=>{
    //         expect(Response.status).to.eq(200)
    //         cy.log(JSON.stringify(Response.body))
    //          expect(Response.body.cards, 'At least one card should be returned').to.have.length(1)
    //     })
    // })
    it('returns cards to deck', () => {
        cy.request('GET', `https://www.deckofcardsapi.com/api/deck/${deckId}/return/`).then((Response)=> {
            expect(Response.status).to.eq(200)
            cy.log(JSON.stringify(Response.body))
        })
    })
})