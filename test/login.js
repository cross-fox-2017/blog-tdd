const chai         = require('chai')
const should       = chai.should()
const expect       = chai.expect
const chaiHttp     = require('chai-http')

chai.use(chaiHttp);

// const Users = require('../server/models/users.model')

describe('Sign up Test : ', () => {
  it('Should return user data when success login',(done) => {
    chai.request('http://localhost:3000')
        .post('/users/new')
        .send({username:"test", password:"123"})
        .end(function(err,res){
          res.should.have.status(200)
          res.body.should.be.a('object');
          done()
        })

  })

})

describe('Login Test : ', () => {
  it('Should return user data when success login',(done) => {
    chai.request('http://localhost:3000')
        .post('/users/login')
        .send({username:"test", password:"123"})
        .end(function(err,res){
          // console.log(res.body.token);
          var token = res.body.token
          token.should.deep.equal(token)
          done()
        })

  })

})

describe('Delete User Test : ', () => {
  it('Should DELETE user data when delete',(done) => {
    chai.request('http://localhost:3000')
        .delete('/users/test')
        .end(function(err,res){
          res.should.have.status(200)
          res.body.should.be.a('object');
          done()
        })
  })
})
