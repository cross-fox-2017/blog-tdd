var chai   = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('pengecekan crud artikel', function () {
  it('jika artikel berhasil disimpan akan mengirimkan id artikel', function(done) {
      chai.request('http://localhost:3000').post('/artikel').send(
        {title: "this title",
        isi:"ini isinya"
      }).end(function(err, res){
          res.body.should.have.been.property("this title","ini isinya")
          done()
      })
  })

  it('jika artikel berhasil disimpan akan mengirimkan id artikel', function(done) {
      chai.request('http://localhost:3000').get('/artikel').end(function(err, res){
          res.body.should.have.been.property("[0].title","this title")
          done()
      })
  })

  it('jika artikel berhasil disimpan akan mengirimkan id artikel', function(done) {
      chai.request('http://localhost:3000').delete('/artikel/:id').end(function(err,res){
          res.body.message.equal(`artikel with id ${artikel.id} has been deleted`)
          done()
      })
  })
})
