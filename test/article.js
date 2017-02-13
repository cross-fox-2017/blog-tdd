const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiHttp = require('chai-http')
const expect = chai.expect
const articles = require('../server/models/articles')

chai.use(assertArrays)
chai.use(chaiHttp)

var url = 'http://localhost:3000'

describe('blog engine CRUD Articles', function(){
  var dummyid = ""
  it('expect api/user to return content', function(done){
    chai.request(url)
    .get('/api/articles')
    .end(function(err, res){
      expect(res.body[0]).to.have.property('content');
      done()
    })
  })
  it('expect api/articles to return array of object', function(done){
    chai.request(url)
    .get('/api/articles')
    .end(function(err, res){
      expect(res.body).to.be.array;
      done()
    })
  })
  it('expect api/articles to create new articles', function(done){
    chai.request(url)
    .post('/api/articles')
    .send({content: 'some content', title: 'some title', author: 'some author'})
    .end(function(err, res){
      dummyid = res.body._id
      expect(res.body).to.have.deep.property('content', 'some content')
      expect(res.body).to.have.deep.property('title', 'some title')
      expect(res.body).to.have.deep.property('author', 'some author')
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done()
    })
  })
  it('expect api/articles to return details of articles', function(done){
    chai.request(url)
    .get('/api/articles/'+dummyid)
    .end(function(err, res){
      expect(res.body).to.have.deep.property('content', 'some content')
      expect(res.body).to.have.deep.property('title', 'some title')
      expect(res.body).to.have.deep.property('author', 'some author')
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done()
    })
  })
  it('expect api/articles to update created articles', function(done){
    chai.request(url)
    .put(`/api/articles/`+dummyid)
    .send({content: 'change content'})
    .end(function(err, res){
      expect(res.body).to.have.deep.property('content', 'change content')
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done()
    })
  })
  it('expect api/articles to deleted new created articles', function(done){
    chai.request(url)
    .delete(`/api/articles/`+dummyid)
    .end(function(err, res){
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    done()
    })
  })
})
