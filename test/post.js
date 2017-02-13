const chai = require('chai');
const should = chai.should();
const chaiArrays = require('chai-arrays');
const chaiHttp = require('chai-http');
chai.use(chaiArrays);
chai.use(chaiHttp);

const models = require('../models/post');

describe('Testing Blog', function () {
  it('should return Schema', function () {
    models.should.be.ok
  })
  it('should return subject of new post', function (done) {
    chai.request('http://localhost:3000')
    .post('/new')
    .send({subject: "Test Post", text: "This post submitted from chai"})
    .end(function(err,res){
      res.body.subject.should.equal("Test Post")
      done()
    })
  })
  it('should return blog post id with params id', function (done) {
    chai.request('http://localhost:3000')
    .get('/post/58a1755d4574ba1a42df9b2a')
    .end(function(err,res){
      res.body._id.should.equal("58a1755d4574ba1a42df9b2a")
      done()
    })
  })
  it('should return blog post subject with edited subject', function (done) {
    chai.request('http://localhost:3000')
    .put('/edit/post/58a1755d4574ba1a42df9b2a')
    .send({subject:'UPDATED SUBJECT'})
    .end(function(err,res){
      res.body.subject.should.equal("UPDATED SUBJECT")
      done()
    })
  })
  it('should return message deleted', function (done) {
    chai.request('http://localhost:3000')
    .del('/delete/post/58a1755d4574ba1a42df9b2a')
    .end(function(err,res){
      res.body.should.be.an('object')
      done()
    })
  })
})
