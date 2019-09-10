const app = require('./app/app')

const PORT = process.env.PORT || 8000

app.listen(PORT, err => err ? console.error(err) : console.log(`app is running! http://localhost:${PORT}`))