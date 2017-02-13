const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(assertArrays)
chai.use(chaiHttp)

describe('initial connection', function(){
  it('test expect to be ok', function(){
    expect('everyting').to.be.ok
  })
})
