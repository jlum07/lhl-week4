const pg = require("pg");

const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


const famousdb = require('./famousdb.js')


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  famousdb.findByFirstName(client, process.argv[2])
    .then((result) => {
      let count = 0;
      for(let row of result.rows) {
        console.log(`- ${++count}: ${row.first_name} ${row.last_name}, born '${row.birthdate.toISOString().substring(0,10)}'`);
      }
      client.end();
    })
    .catch((err) => {
      console.error("error running query", err);
      client.end();
    });


});