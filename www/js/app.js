// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
  .controller("App",function($scope){

    $scope.login=function(){
      var username = $('#username').val();
      var password = $('#password').val();
      var userDefault = "admin";
        if (username == userDefault && password == userDefault) {
            window.location.replace("app.html");
        }else{
          alert('Username or password incorrect');
        };      
    };

    $scope.logut=function(){
      var username = '';
      var password = '';
      if (username == '' && password == '') {
            window.location.replace("index.html");
        }else{
          alert('Username or password incorrect');
        };  
    }

    $scope.scanear=function(){
                //window.location.replace("qr.html");
        cordova.plugins.barcodeScanner.scan(
            function(result) {  
                var codigoQR="result.text";

                $('#resultado').html(codigoQR);
            }, 
            function(error) {
                notificacion("Ha ocurrido un error al escanear.");
               
            }
        );
    };

  })






.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at 
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});
