const express = require('express')
const app = express()
const port = 8000

app.use("", express.static(__dirname));
app.use("", express.static("../../../axis-acap2/"))


app.listen(port, () => {
	  console.log('Example app listening at port', port);
})
