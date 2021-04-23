const express = require('express')
const app = express()
const port = 3000

app.use("", express.static(__dirname));

//const fs = require('fs');
//jsonString = fs.readFileSync('./config.json');
//var json = JSON.stringify(JSON.parse(jsonString));

app.listen(port, () => {
	  console.log('Example app listening at port', port);
})
