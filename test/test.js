const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays)
const expect = require('chai').expect

describe('function', function(){
  it('test expect to be ok', function(){
    expect('everyting').to.be.ok
  })
})
