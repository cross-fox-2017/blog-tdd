const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(assertArrays)
chai.use(chaiHttp)

describe('blog engine CRUD Articles', function(){
  it('expect api/user to return content', function(done){
    chai.request('http://localhost:3000')
    .get('/api/articles')
    .end(function(err, res){
      expect(res.body).to.have.property('content');
      done()
    })
  })
})
