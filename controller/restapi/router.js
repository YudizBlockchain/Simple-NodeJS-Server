let express = require('express');
let router = express.Router();
let format = require('date-format');


let serverFunctions = require('./client/serverFunctions');

module.exports = router;

router.use(function(req, res, next) {
    console.log('...');
    console.log('........');
    console.log('..............');
    console.log(format.asString('hh:mm:ss.SSS', new Date())+'::............ '+req.url+' .............');
    console.log('Request: ' + JSON.stringify(req.body, null, 4) );
    console.log('Query: ' + JSON.stringify(req.query, null, 4) );
    next(); // make sure we go to the next routes and don't stop here

    function afterResponse() {
        res.removeListener('finish', afterResponse);

        console.log('<<<<< ****** >>>>>');
        console.log('res: ' + (res.statusCode==200)? 'Transaction Success' : 'Transaction Failed' );
        console.log('<<<<< ****** >>>>>');
        console.log('........');
        console.log('...');
            
    }    
    res.on('finish', afterResponse);    
});


//-------------------------------------------------------------------------------------------------------


router.get('*', serverFunctions.homeRedirect);
