const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect
const controller = require('../controllers/users')
chai.use(chaiHttp);

describe('User registration test', () => {
  it('Server home testing connection', (done) => {
    chai.request('http://localhost:3000').get('/').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
})

describe('User registration test', () => {
  it('Server home testing connection', (done) => {
    chai.request('http://localhost:3000').get('/').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
})
