

/**
 * Module dependencies.
 */

var express = require('express')
  , mysql = require('mysql') //Añadiendo 
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("jsonp callback", true);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//----Para establecer la conexion a la BBDD

var connection = mysql.createConnection(
    {
      // esto es para conectarme a casa
      host     : 'localhost',
      user     : 'root',
      password : 'Manuel_72',
      database : 'perros',
    }
);

// log, conectando a mi BBDD
console.log('EOEOEO________------_______Connecting to MySQL...');


// me conecto a mi BBDD --> ESTABLECIENDO LA CONEXION A LA BBDD
connection.connect(function(error, results) {
	if(error) {
		console.log('PPPPPPP________------_______Connection Error: ' + error.message);
		return;
	}
	console.log('LOLLLLL________------_______Connected to MySQL');
	
	ClientConnectionReady(connection);
});


// le digo que tabla usare
ClientConnectionReady = function(connection)
{
	connection.query('USE perros', function(error, results) {
        if(error) {
            console.log('ClientConnectionReady Error: ' + error.message);
            connection.end();
            return;
        }

        //ClientReady(connection);
    });
};


//METODO DE CONSULTA A LA BBDD AUTONIMIAS, EL CUAL ME DEVOLVERA TODAS LAS COMUNIDADES AUTONOMAS DE LA BASE DE DATOS.
app.get('/listadoRazas',  function(req, res) {
	console.log('ESTAMOS EN LISTADO RAZAS')

	 //var qery = "select * from comunidades"; //Nos devolvera todas las comunidades autónomas de la BBDD

	  var qery = "select * from  perros";
	  console.log(qery);
	  console.log('req--->'+req);//estos CONSOLE salen por la consola del node: localhost:3000

	  connection.query(qery,
		function(err, results, fields) {
		console.log('\nESTAMOS EN LA FUNCION ERROR - RESULT - CAMPOS');
		
	        if(err) { throw err; }
	        
	        if (results && results.length > 1) {
				console.log('\nESTAMOS EN LA PARTE DE RESULTADOS , PORQUE EXISTE POR LO MENOS 1');
			
				res.header("Access-Control-Allow-Origin","*");
	            
	            
	            var json = JSON.stringify(results[0]);
	            console.log('\nEste es el JSON... o eso creo -->  ' + json);
	            
	            //res.write(JSON.stringify(results[0]), 'utf8');
	            res.end(JSON.stringify(results));
	          

	        } else {
	        	console.log('\nALGO NO FUE TAN BIEN');
	        
	            //req.session.destroy();
	            res.writeHead(401, { 'Content-Type': 'text/html' });
	            res.end();
	        }
	    });
});
//-----------------------------------------







app.get('/', routes.index);
app.get('/users', user.list);





//Definicion de nuestros SERVICIOS DE PRUEBA



//-------------------------------------------



http.createServer(app).listen(app.get('port'), function(){
  console.log('AQUIIII --->Express server listening on port ' + app.get('port'));

});
