function scanear(){
        cordova.plugins.barcodeScanner.scan(
            function (result) {  
                var codigoQR=result.text;
                $('#resultado').html(codigoQR);
            }, 
            function (error) {
                notificacion("Ha ocurrido un error al escanear.");
            }
        );
    };
