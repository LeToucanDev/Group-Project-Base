import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: 'mysql'
  },
};
