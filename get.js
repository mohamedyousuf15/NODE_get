var http = require('http');
var request = require('request');



http.get("http://YOUR SITE NAME", function(res) {
    var body = [];
	
  console.log("Got response: " + res.statusCode);
   
   res.on('data', function(d) {
   console.info('GET result:\n');
		body += d;
		
		var string = JSON.stringify(body);
	       var arr = string.split(",");
           var s= 'splitted data ';
				console.info('splitted data :'  + arr[0] );
				console.info('splitted data :'  + arr[1] ); //id 
				console.info('splitted data :' + arr[2] ); // rpi name 
				console.info('splitted data :' + arr[3] ); //room
				console.info('splitted data :'  + arr[4] ); //load 
				console.info('splitted data :'  + arr[5] );  //status
				console.info('\n\nCall completed');
			
    });
	
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

 console.log('GETTING DATAS');
