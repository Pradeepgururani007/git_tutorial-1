var arr = ['A','B','C','D','E'];
for( var k in arr ){
	console.log( arr[k] ); 
}

var json = require('./config.json');
console.log( json.username )
console.log( json.password )
console.log( 'This is added by Developer B' )
