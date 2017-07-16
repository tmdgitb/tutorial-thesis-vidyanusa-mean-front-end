var angularModule = angular.module('modulBelajar',[])

var base_api_url = 'http://127.0.0.1:3000'

angularModule.controller('viewController', function ($scope, $http) {

  $scope.loadDataPengguna = function () {

    var req = {
       method: 'GET',
       url: base_api_url+'/daftar_pengguna',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
       }
    }

    $http(req).then(function(response) {
      var dataPengguna = response.data

      var daftarPengguna = []
      for (var i = 0; i < dataPengguna.length; i++) {
        daftarPengguna.push({'id':dataPengguna[i]._id,'email':dataPengguna[i].email,'sandi':dataPengguna[i].sandi})
      }

      $scope.paraPengguna = daftarPengguna

    })

  }

  $scope.loadDataPengguna()


})
