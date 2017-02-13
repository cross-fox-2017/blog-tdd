const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(assertArrays)
chai.use(chaiHttp)

var url = 'http://localhost:3000'

describe('blog engine CRUD Users', function(){
  let dummyid = ""
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
    .post('/api/users/register')
    .send({username: 'someuser', password: 'somepassword', email:'some@email.com'})
    .end(function(err, res){
      dummyid = res.body._id
      expect(res.body).to.have.deep.property('username', 'someuser')
      expect(res.body).to.have.deep.property('password')
      expect(res.body).to.have.deep.property('email', 'some@email.com')
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done()
    })
  })
  it('expect api/user cek login user and get auth', function(done){
    chai.request(url)
    .post('/api/users/login')
    .send({username: 'someuser', password: 'somepassword'})
    .end(function(err, res){
      expect(res.body).to.have.property('token');
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done()
    })
  })
  it('expect api/users to deleted new created users', function(done){
    chai.request(url)
    .delete(`/api/users/`+dummyid)
    .end(function(err, res){
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    done()
    })
  })
})
