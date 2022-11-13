const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


console.log(app);

app.get('/', (req, res) => {
  res.send('c2ock')
})

app.listen(PORT);