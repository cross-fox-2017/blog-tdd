const chai = require('chai');
const should = chai.should() //Should
const expect = chai.expect; //expect
const chaiHttp = require('chai-http');
chai.use(chaiHttp)



describe('Testing User Login', function() {
    it('Return Token When Success Login', function(done) {
        chai.request('http://localhost:3000')
            .post('/api/login')
            .send({
                username: "admin",
                password: "admin"
            })
            .end(function(err, res) {
                // console.log(res);
                res.body.should.have.property('token');
                // res.body.username.should.equal('asdassdfgdasdasd')
                //Untuk Mengakhiri Request
                done()
            })
    })
})
