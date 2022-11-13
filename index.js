const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

let data = JSON.stringify({
  data: [{
      name: "test1"
    },
    {
      name: "test2"
    },
  ]
})

app.get('/', (req, res) => {
  res.send('test');
})

app.get('/api/names', (req, res) => {
  res.send(data)
})

app.listen(PORT);