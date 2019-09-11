require('dotenv').config()
const { PORT } = require('./app/configuration')
const app = require('./app/app')

app.listen(PORT, err => err ? console.error(err) : console.log(`app is running! http://localhost:${PORT}`))