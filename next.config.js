require('dotenv').config()

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    CLIENT_READ_KEY: process.env.CLIENT_READ_KEY,
    CLIENT_WRITE_KEY: process.env.CLIENT_WRITE_KEY
  }
}