const { Client } = require("pg");
const client = new Client({
  user: "sasakiryou",
  host: "127.0.0.1",
  database: "nodedb",
  password: "3391sanda",
  port: 5432,
});
client.connect();
const query = {
  // text: "DELETE FROM donateFor WHERE id = $1",
  // values: [1],
  // text: "SELECT * FROM donateFor",
  text: "INSERT INTO donateFor VALUES ($1, $2)",
  values: [1, "こども食堂　あいさん家"],
};
client
  .query(query)
  .then((res) => {
    console.log(res);
    client.end();
  })
  .catch((e) => console.error(e.stack));
// .query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   client.end();
// })
