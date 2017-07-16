var restClient = require('node-rest-client').Client;
var rClient = new restClient();

var base_api_url = 'http://127.0.0.1:3000'

exports.tambah =function (req, res) {
  res.render('tambah')
}

exports.proses_tambah =function (req, res) {

  args = {
  	data: { email: req.body.email,
            sandi: req.body.sandi
    },
  	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  };

  rClient.post(base_api_url+'/tambah_pengguna', args, function (data, response) {
    //console.log(response)
    res.redirect('/')
  })

}
