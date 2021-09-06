require( "dotenv" ).config();

const { DEV_DATABASE_HOST, DEV_DATABASE_USERNAME, DEV_DATABASE_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DEV_DATABASE_USERNAME,
    password: DEV_DATABASE_PASSWORD,
    database: "xcheq_development",
    host: DEV_DATABASE_HOST,
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "xcheq_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "xcheq_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
