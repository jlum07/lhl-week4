function findByFirstName (db, firstName) {

  const query = "SELECT * FROM famous_people WHERE first_name=$1;"

  return db.query(query, [firstName]);

}


module.exports = {
  findByFirstName : findByFirstName
}