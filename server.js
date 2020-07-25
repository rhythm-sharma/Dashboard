const express = require("express");
const path = require("path");
const app = express();

const baseEndpoint = "/api/v1";

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/client/build")));

// Require & Import API routes
const usersRouter = require("./mock-server/routes/users");

// Use API Routes
app.use(`${baseEndpoint}/users`, usersRouter);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// setting up port to 5000
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on port:  ${port}`);
