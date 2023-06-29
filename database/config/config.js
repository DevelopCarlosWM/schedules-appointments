require('dotenv').config()

module.exports = {
  development: {
    username: process.env.isDev === 'true' ? process.env.LOCAL_DEV_DATABASE_USERNAME : process.env.DEV_DATABASE_USERNAME,
    password: 'dev',
    database: process.env.isDev === 'true' ? process.env.LOCAL_DEV_DATABASE_NAME : process.env.DEV_DATABASE_NAME,
    host: process.env.isDev === 'true' ? process.env.LOCAL_DEV_DATABASE_IP : process.env.DEV_DATABASE_IP,
    dialect: "postgres"
  },
  test: {
    username: process.env.isDev === 'true' ? process.env.LOCAL_TEST_DATABASE_USERNAME : process.env.TEST_DATABASE_USERNAME,
    password: 'test',
    database: process.env.isDev === 'true' ? process.env.LOCAL_TEST_DATABASE_NAME : process.env.TEST_DATABASE_NAME,
    host: process.env.isDev === 'true' ? process.env.LOCAL_TEST_DATABASE_IP : process.env.TEST_DATABASE_IP,
    dialect: "postgres"
  },
}
