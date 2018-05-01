const pg = require("pg");

const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  version: '7.4.1',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const famousdb = require('./famousdb_knex.js');

knex('*').from('famous_people').where('first_name', process.argv[2])
  .then((rows) => {
    famousdb.printByFirstName(rows);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
  });


