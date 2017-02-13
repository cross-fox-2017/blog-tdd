const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('menjalankan method untuk artikel', function() {
  it('artikel berhasil disimpan', function(done){
    chai.request('http://localhost:3000').post('/artikel').end(function (err,res){
      res.body.should.have.deep.property('[0].id','1')
      done()
    })
  })
})
