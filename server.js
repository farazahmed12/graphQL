const express = require("express");
const resolvers = require("./resolvers");
const schema = require("./schema");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.get("/", (req, res) => {
  res.send("Up and Running");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server running"));
