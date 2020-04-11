const app = require('./hello_world.js').app;
const supertest = require('supertest');
const request = supertest(app);
const { expect } = require('chai');

describe('Test function "getUserInfo"', function () {
    it('should return an user object', function (done) {
        request
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                }
                expect(res.body).to.have.property('username');
                expect(res.body.username).to.be.a('string');
            });
        done();
    });
});
