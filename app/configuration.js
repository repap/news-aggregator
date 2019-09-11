const config = {
  PORT: process.env.PORT || 8000,
  db: {
    URL: process.env.MONGO_DB_URL,
    PASSWORD: process.env.MONGO_DB_PASSWORD,
    USER: process.env.MONGO_DB_USER
  }
}

module.exports = {...config}