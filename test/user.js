const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(assertArrays)
chai.use(chaiHttp)

var url = 'http://localhost:3000'

describe('blog engine CRUD Users', function(){
  it('expect api/user to return token', function(done){
    chai.request(url)
    .get('/api/users')
    .end(function(err, res){
      expect(res.body).to.have.property('token');
      done()
    })
  })
  it('expect api/user to return array', function(done){
    chai.request(url)
    .get('/api/users')
    .end(function(err, res){
      expect(res.body).to.be.array;
      done()
    })
  })
  it('expect api/user to register new user', function(done){
    chai.request(url)
    .post('/api/users')
    .send({username: "someuser", password: "somepassword", email:"some@email.com"})
    .end(function(err, res){
      expect(res.body).to.have.deep.property('username', 'someuser')
      expect(res.body).to.have.deep.property('password', 'somepassword')
      expect(res.body).to.have.deep.property('email', 'some@email.com')
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done()
    })
  })
})
