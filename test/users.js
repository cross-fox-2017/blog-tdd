const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect
const controller = require('../controllers/users')
chai.use(chaiHttp);

const url = 'http://localhost:3000'

describe('Login page testing', () => {
  it('Server login testing connection', (done) => {
    chai.request(url).get('/').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
  it('Server login testing connection', (done) => {
    chai.request(url).get('/').end((err, res) => {
      expect(res).to.be.html
      done()
    })
  })
})

describe('API path testing', () => {
  it('API connection', (done) => {
    chai.request(url).get('/api').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
  it('JSON response', (done) => {
    chai.request(url).get('/api').end((err, res) => {
      expect(res).to.be.json
      done()
    })
  })
  it('Get API users description URL', (done) => {
    chai.request(url).get('/api').end((err, res) => {
      expect(res.body).to.have.deep.property('users_url', 'http://localhost:3000/api/users');
      done()
    })
  })
  it('Get API blogs description URL', (done) => {
    chai.request(url).get('/api').end((err, res) => {
      expect(res.body).to.have.deep.property('blogs_url', 'http://localhost:3000/api/blogs');
      done()
    })
  })
})

describe('Users API testing', () => {
  it('Users API connection', (done) => {
    chai.request(url).get('/api/users').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
  it('Users API JSON response', (done) => {
    chai.request(url).get('/api/users').end((err, res) => {
      expect(res).to.be.json
      done()
    })
  })

  // Uncomment below to avoid user input
  // it('Insert new User', (done) => {
  //   chai.request(url).post('/api/users').send({
  //     username: 'dgana',
  //     password: '123'
  //   }).end((err, res) => {
  //     expect(res.body).to.have.deep.property('username', 'dgana');
  //     done()
  //   })
  // })
  it('Get API users name', (done) => {
    chai.request(url).get('/api/users').end((err, res) => {
      expect(res.body).to.have.deep.property('name', 'dgana');
      done()
    })
  })
})
