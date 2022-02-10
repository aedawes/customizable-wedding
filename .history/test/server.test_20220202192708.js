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
            // The supertest request function returns a promise.
            // Remember that one way to run asynchronous tests
            // is to return a promise.
            return request(app)
                .post('/accounts')
                .send({
                    username: 'bob12',
                    name: 'Bob',
                    password: 'notBob'
                })
                .expect(201)
        })
        // it('can delete an account', () => {
        //     return request(app)
        //         .delete('/accounts/{accountId}')
        //         .expect(204)
        // })
        // it('can log in', () => {
        //     return request(app)
        //         .put('/accounts/{accountId}/login')
        //         .expect(200)
        // })
        // it('can log out', () => {
        //     return request(app)
        //         .put('/accounts/{accountId}/logout')
        //         .expect(200)
        // })
    })
    describe('GET /{accountId}', function() {
        it('responds with json', async function() {
            const response = await request(app)
            .get('/accountId')
            .set('Accept', 'application/json')
            expect(response.body).to.be.an('object')
            expect(response.status).toEqual(200);
        });
    });
    // describe('forms', () => {
    //     it('can update form', () => {
    //         return request(app)
    //             .put('/forms')
    //             .expect(200)
    //     })
    // })
    // describe('guests', () => {
    //     it('can add guest to list', () => {
    //         return request(app)
    //             .put('/guests/{accountId}/addGuest')
    //             .expect(200)
    //     })
    //     it('can get guest list', () => {
    //         return request(app)
    //             .put('/guests')
    //             .expect(200)
    //     })
    //     it('can delete guest from list', () => {
    //         return request(app)
    //             .put('/guests/{accountId}/deleteGuest')
    //             .expect(204)
    //     })
    // })
})