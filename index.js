const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const testRoutes =require ('./routes/testRoutes')
const animeRoutes = require('./routes/animeRoutes') // animeRoutes is the file and the location
app.get('/', (req, res) => {
res.send('Hello World!')
})
app.use(express.json());
app.use(cors())
app.use('/anime', animeRoutes);
app.use('/testRoutes', testRoutes)

app.listen(port, () => {
console.log(`Example app
listening at http://localhost:${port}`)
})

