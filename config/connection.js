// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
            
        user: "wywv80da5kfclj85",
        password: "jal3sm2mai28wth8",
        database: "h9fdlw1dzxy5cpsh"
    });
}

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;