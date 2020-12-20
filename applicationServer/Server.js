var express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

app.post('/sendData', function (req, res) {
  res.send('POST request to the homepage');
  console.log('Received data from camera');

  /*
	Interface of the application server to the database.

	1. Check if data is correctly formatted.
	2. Add data to the MySql Database.
	3. Return/Conclude the function as necessary.
  */
});

app.get('/requestData', function (req, res) {
  res.send('GET request to the homepage');

  /*
	Interface of the application server to the browser.

	1. Check if request for data is valid and correctly formatted.
	2. Query MySql database for information and return to HTTP request.
	3. Conclude the function as necessary.
  */
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});