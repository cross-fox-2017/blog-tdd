const chai         = require('chai')
const should       = chai.should()
const expect       = chai.expect
const chaiHttp     = require('chai-http')

chai.use(chaiHttp);

// const Blogs = require('../server/models/blogs.model')

describe('Create Blog Test : ', () => {
  it('Should return blog data when success create',(done) => {
    chai.request('http://localhost:3000')
        .post('/blogs/new')
        .send({title:"kumpulberbagi", author:"yoni", article:"halo halo halo"})
        .end(function(err,res){
          res.should.have.status(200)
          res.body.should.be.an('object');
          res.body.should.have.property("title")
          res.body.should.have.property("author")
          res.body.should.have.property("article")
          done()
        })

  })
})

describe('Update Blog Test : ', () => {
  it('Should return blog data when success create',(done) => {
    chai.request('http://localhost:3000')
        .put('/blogs/kumpulberbagi')
        .send({title:"kumpulbesama", author:"yona", article:"hola hola hola"})
        .end(function(err,res){
          res.should.have.status(200)
          res.body.should.be.an('object');
          res.body.should.have.property("title")
          res.body.should.have.property("author")
          res.body.should.have.property("article")
          console.log(res.body);

        })
        done()
  })
})

describe('Delete Blog Test : ', () => {
  it('Should DELETE Blog data when delete',(done) => {
    chai.request('http://localhost:3000')
        .delete('/users/kumpulbesama')
        .end(function(err,res){
          res.should.have.status(200)
          res.body.should.be.an('object');
          done()
        })
  })
})
