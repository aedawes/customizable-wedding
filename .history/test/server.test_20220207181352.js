const request = require('supertest')
const expect = require('chai').expect
const { server } = require('../server/server')

describe('server', () => {
    let app

    // beforeEach is a hook function that will run before every test.
    // We use it to get the express "app" from our server function.
    beforeEach(async () => {
        app = await server()
    })

    describe('accounts', () => {
        it('can create an account', () => {
            return request(app)
                .post('/accounts')
                .send({
                    username: 'bob12',
                    name: 'Bob',
                    password: 'notBob'
                })
                .expect(201)
        })
        it('can delete an account', () => {
            return request(app)
                .delete('/accounts/{accountId}')
                .expect(204)
        })
        it('can log in', () => {
            return request(app)
                .put('/accounts/{accountId}/login')
                .send({
                    username: "username",
                    password: "a-password"
                })
                .expect(200)
        })
        it('can log out', () => {
            return request(app)
                .put('/accounts/{accountId}/logout')
                .expect(205)
        })
    })
    describe('GET /{accountId}', function() {
        it('responds with json', async function() {
            const response = await request(app)
            .get('/accountId')
            .set('Accept', 'application/json')
            expect(response.body).to.be.an('object')
            expect(200);
        })
    })
    // describe('Forms', () => {
    //     it('can update form', () => {
    //         return request(app)
    //             .put('/forms')
    //             .send({
    //                 coupleName: "John, Sarah, Smith",
    //                 couplePhotoOne: "UGxhY2Vob2xkZXIK",
    //                 addressOne: "The venue, 123 Sesame st",
    //                 addressOnePhoto: "UGxhY2Vob2xkZXIK",
    //                 couplePhotoTwo: "UGxhY2Vob2xkZXIK",
    //                 addRegistryLink: "www.website.com/ourRegistry"
    //             })
    //             .expect(200)
    //     })
    // })
    describe('guests', () => {
        it('can add guest to list', () => {
            return request(app)
                .put('/guests/{accountId}/addGuest')
                .send({
                    guestName: "John Smith",
                    guestEmail: "foo@email.com"
                })
                // .expect(200)
                .then(response => {
                    asswert(response.body);
                })

        })
        it('can delete guest from list', () => {
            return request(app)
                .delete('/guests/{accountId}/deleteGuest')
                .expect(204)
        })
    })
    describe('GET /guests', function() {
        it('responds with json', async function() {
            const response = await request(app)
            .get('/guests')
            .set('Accept', 'application/json')
            expect(response.body).to.be.an('object')
            expect(200);
        })
    })
});