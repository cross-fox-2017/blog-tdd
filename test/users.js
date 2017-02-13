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
          '/auth/login'
        ])
        done()
      })
  })

// it('should get all articles', function (done) {
//   chai.request(url)
//     .get('/api/articles')
//     .end(function (err, res) {
//       res.body[0].title.should.equal('tentang dia')
//       res.should.have.status(200)
//       done()
//     })
// })
//
// it('should be able to post new article', function (done) {
//   chai.request(url)
//     .post('/api/articles')
//     .send({
//       title: 'something',
//       content: 'something'
//     })
//     .end(function (err, res) {
//       createdId = res.body._id
//       res.body.title.should.equal('something')
//       res.should.have.status(200)
//       done()
//     })
// })
//
// it('should be able to update article', function (done) {
//   chai.request(url)
//     .put(`/api/articles/${createdId}`)
//     .send({
//       title: 'tentang kita',
//       content: 'bahagia'
//     })
//     .end(function (err, res) {
//       res.body.title.should.equal('tentang kita')
//       res.should.have.status(200)
//       done()
//     })
// })
//
// it('should be able to delete article', function (done) {
//   chai.request(url)
//     .delete(`/api/articles/${createdId}`)
//     .end(function (err, res) {
//       res.should.have.status(200)
//       done()
//     })
// })
})
