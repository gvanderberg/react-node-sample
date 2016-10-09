var express = require("express");
var path = require("path");

const PORT = 8080

const app = express();

// serve static assets normally
app.use(express.static(__dirname + "/public"));

// handle every other route with index.html, which will contain a script tag to your application's JavaScript file(s).
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "views", "index.html"));
})

const server = app.listen(PORT, (err) => {
    if (err) {
        return console.error(err);
    }

    const host = server.address().address;
    const port = server.address().port;

    console.log("listening on http://%s:%s", host, port);
});