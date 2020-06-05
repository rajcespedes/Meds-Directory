const express 	= require('express'),
	  app		= express();



const docsroutes = require('./routes/docsroutes');

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(docsroutes);


app.listen(3000);