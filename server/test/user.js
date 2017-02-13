var chai   = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('pengecekan login system', function () {
  it('jika user berhasil login akan mengembalikan token', function(done) {
      chai.request('http://localhost:3000').post('/login').send(
        {username: "diditsuryadi",
        password: "diditsuryadi"
      }).end(function(err, res){
          res.body.should.have.been.property("this title","ini isinya")
          done()
      })
  })

})
