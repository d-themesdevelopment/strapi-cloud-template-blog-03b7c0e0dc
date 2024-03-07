const path = require("path");
const parse = require("pg-connection-string");
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      // host: env("DATABASE_HOST", "localhost"),
      // port: env.int("DATABASE_PORT", 5432),
      // database: env("DATABASE_NAME", "test"),
      // user: env("DATABASE_USERNAME", "test"),
      // password: env("DATABASE_PASSWORD", "test"),
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    debug: false,
  },
});
