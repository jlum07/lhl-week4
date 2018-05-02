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

const firstName = process.argv[2];
const lastName = process.argv[3];
const birthDate = process.argv[4];

knex('famous_people')
  .then((result) => {
    return knex.insert({first_name: firstName, last_name: lastName, birthdate: birthDate}).into('famous_people');
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
  });




var a = knex('famous_people').insert({first_name: firstName, last_name: lastName, birthdate: birthDate}).returning('*');


console.log(a);

// knex('famous_people').select('*');

knex('*').from('famous_people')
  .then((table) => {
    // famousdb.printByFirstName(rows);
    console.log(table);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
  });