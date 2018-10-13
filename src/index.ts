import * as express from 'express';
import * as path from 'path';
import * as knex from 'knex';

interface Config {
  port: number;
}

const conn = knex({
  client: 'pg',
  connection: {
    host: 'postgres',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
  }
});

const config: Config = require(path.resolve(__dirname, '../../config.json'));

const app = express();

app.get('/hello', (req, res) => {
  res.json({
    hello: conn.select().toSQL()
  });
});

app.listen(config.port, () => {
  console.log('Running on port', config.port);
});