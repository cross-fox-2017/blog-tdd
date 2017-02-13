const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiArrays = require('chai-arrays')
const chaiHTTP = require('chai-http')
chai.use(chaiArrays)
chai.use(chaiHTTP)

const url = 'http://localhost:3000'

describe('Testing user CRUD', function () {
  let createdId
  let dummy = ['adaaja', '123', 'adaaja@gmail.com', 'adaaja2', '456', 'adaaja2@yahoo.com']

  before(function () {
    // drop collection
  })

  it('should show home details', function (done) {
    chai.request(url)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200)
        res.body.message.should.equal('You are in home')
        done()
      })
  })

  it('should show auth details', function (done) {
    chai.request(url)
      .get('/auth')
      .end(function (err, res) {
        res.should.have.status(200)
        res.body.endpoints.should.equalTo([
          '/auth/register',
          '/auth/login',
          '/auth/users',
          '/auth/users/:id'
        ])
        done()
      })
  })

  it('should be able to post new user', function (done) {
    chai.request(url)
      .post('/auth/users')
      .send({
        username: dummy[0],
        password: dummy[1],
        email: dummy[2]
      })
      .end(function (err, res) {
        createdId = res.body._id
        res.body.email.should.equal(dummy[2])
        res.should.have.status(200)
        done()
      })
  })

  it('should get all user', function (done) {
    chai.request(url)
      .get('/auth/users')
      .end(function (err, res) {
        res.body[0].password.should.equal(dummy[1])
        res.should.have.status(200)
        done()
      })
  })

  it('should be able to update user', function (done) {
    chai.request(url)
      .put(`/auth/users/${createdId}`)
      .send({
        username: dummy[3],
        password: dummy[4],
        email: dummy[5]
      })
      .end(function (err, res) {
        res.body.email.should.equal(dummy[5])
        res.should.have.status(200)
        done()
      })
  })

  it('should be able to delete user', function (done) {
    chai.request(url)
      .delete(`/auth/users/${createdId}`)
      .end(function (err, res) {
        res.should.have.status(200)
        done()
      })
  })
})
