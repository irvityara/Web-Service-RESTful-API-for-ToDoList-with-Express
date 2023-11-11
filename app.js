const express = require("express");
const app = express();

const rootRoutes = require("./routes");
const config = require("./config/config");

const PORT = process.env.PORT || 3000;

async function testConnection() {
  try {
    await config.authenticate();
    console.log("Connection has been established succesfully.");

    // await db.sync({force: true});
    // await User.sync({force: true});
    // await Todo.sync({force: true});

    console.log("All models were synchronized succesfully.");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

testConnection();

app.use(express.json());
app.use(rootRoutes);

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
});
