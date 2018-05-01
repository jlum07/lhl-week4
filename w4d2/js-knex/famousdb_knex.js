function printByFirstName (rows) {

  let count = 0;
  for(let row of rows) {
    console.log(`- ${++count}: ${row.first_name} ${row.last_name}, born '${row.birthdate.toISOString().substring(0,10)}'`);
  }

}

module.exports = {
  printByFirstName : printByFirstName
}