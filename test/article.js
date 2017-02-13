const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiHttp = require('chai-http')
const expect = chai.expect
const articles = require('../server/models/articles')

chai.use(assertArrays)
chai.use(chaiHttp)

var url = 'http://localhost:3000'
var dummyid = ""

describe('blog engine CRUD Articles', function(){
  it('expect api/user to return content', function(done){
    chai.request(url)
    .get('/api/articles')
    .end(function(err, res){
      expect(res.body).to.have.property('content');
    })
    done()
  })
  it('expect api/user to return json', function(done){
    chai.request(url)
    .get('/api/articles')
    .end(function(err, res){
      expect(res.body).to.be.json;
    })
    done()
  })
  it('expect api/articles to create new articles', function(done){
    chai.request(url)
    .post('/api/articles')
    .send({content: 'some content', title: 'some title', author: 'some author'})
    .end(function(err, res){
      var dummyid = res.body._id
      expect(res.body).to.have.deep.property('content', 'some content')
      expect(res.body).to.have.deep.property('title', 'some title')
      expect(res.body).to.have.deep.property('author', 'some author')
    })
    done()
  })
  it('expect api/articles to update created articles', function(done){
    chai.request(url)
    .put(`/api/articles/${dummyid}`)
    .send({content: 'change content', title: 'change title', author: 'change author'})
    .end(function(err, res){
      expect(res.body).to.have.deep.property('content', 'change content')
      expect(res.body).to.have.deep.property('title', 'change title')
      expect(res.body).to.have.deep.property('author', 'change author')
    })
    done()
  })
  it('expect api/articles to deleted new created articles', function(done){
    chai.request(url)
    .delete(`/api/articles/${dummyid}`)
    .end(function(err, res){
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    })
    done()
  })
})
