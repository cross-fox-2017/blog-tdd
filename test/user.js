const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(assertArrays)
chai.use(chaiHttp)

describe('blog engine CRUD Users', function(){
  it('expect api/user to return token', function(done){
    chai.request('http://localhost:3000')
    .get('/api/users')
    .end(function(err, res){
      expect(res.body).to.have.property('token');
      done()
    })
  })
})
