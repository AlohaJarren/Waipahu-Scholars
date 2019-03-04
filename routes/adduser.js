'use strict';

const Pool = require('pg-pool');
const config = require('../config.json');
//const bcrypt = require('bcryptjs');
const { table, host, database, user, password, port } = config;
const pool = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});

module.exports.adduser = (event, context, callback) => {
  console.log('event', event.body);
  //var salt = bcrypt.genSaltSync(10);
  //var hash = bcrypt.hashSync(password, salt);
  const postUser = `INSERT INTO ${table} VALUES($1, $2, $3, $4, $5, CURRENT_TIMESTAMP);`;
  let {id, password, email, first_name, last_name} = event.body;

  pool.connect()
    .then(client => {
      client.release();
      return client.query(postUser, [id, password, email, first_name, last_name]);
    })
    .then(data => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
          message: 'Added new user'
      };

      callback(null, response)
    })
    .catch(error=>{
      console.log('error', error);
    })
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};