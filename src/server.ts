import express from 'express'

const app = express();

app.get('/test', (request, response) => {
  return response.send({ "text": "test" })
})

app.listen(3333)