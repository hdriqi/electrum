module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    CLIENT_READ_KEY: process.env.CLIENT_READ_KEY,
    CLIENT_WRITE_KEY: process.env.CLIENT_WRITE_KEY
  }
}