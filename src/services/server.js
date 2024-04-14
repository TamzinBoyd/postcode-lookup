
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var url        = require('url');

var data = require('./data.json');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    if (query.postcode) {
        var newData = data.filter(d => d.address.postcode.indexOf(query.postcode) > -1);
        res.json(newData);
        return;
    }

    // return all data
    res.json(data);
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.use(express.static('app'))

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Open your browser to http://localhost:' + port);

// Data generator
// https://www.json-generator.com/
/*

[
  '{{repeat(100)}}',
  {
    index: "{{index()}}",
    name: "Hermes Parcelshop",
    address: {
      name: "{{company()}}",
      line1: "{{street()}}",
      town: "{{city()}}",
      county: "{{state()}}",
      postcode: '{{random("NG","TH","ST","NN","PE")}}{{integer(5, 19)}} {{integer(1, 9)}}{{random("NB","BA","DA","PL","PE")}}'
    },
    location: {
		latitude: "{{floating(-90.000001, 90)}}",
		longitude: "{{floating(-180.000001, 180)}}"
    },
    opening_times: {
      "Mon": "{{integer(5, 9)}}am - {{integer(6, 10)}}pm",
      "Tue": "{{integer(5, 9)}}am - {{integer(6, 10)}}pm",
      "Wed": "{{integer(5, 9)}}am - {{integer(6, 10)}}pm",
      "Thu": "{{integer(5, 9)}}am - {{integer(6, 10)}}pm",
      "Fri": "{{integer(5, 9)}}am - {{integer(6, 10)}}pm",
      "Sat": "{{integer(5, 9)}}am - {{integer(6, 10)}}pm",
      "Sun": "{{integer(5, 9)}}am - {{integer(6, 10)}}pm"
	},
    delivery_options: [
      '{{repeat(3, 6)}}',
      {
        index: "{{index()}}",
        name: '{{random("Click &amp; Collect - next day", "Click &amp; Collect - Standard", "Click &amp; Collect - Stated Day")}}',
        description: '{{random("Collect from Wednesday, 25th July", "Collect from Thursday, 26th July", "Collect from Thursday, 27th July")}}',
        price: "£{{floating(1.49, 7.49)}}"
      }
    ]
  }
]

*/