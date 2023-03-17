const express = require('express')
const app = express()
const port = 3001
const animeRoutes = require('./routes/animeRoutes')
app.get('/', (req, res) => {
res.send('Hello World!')
})
app.use(express.json());
app.use('/anime', animeRoutes);

app.listen(port, () => {
console.log(`Example app
listening at http://localhost:${port}`)
})

