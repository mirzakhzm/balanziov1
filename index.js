const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users/user'); 
//const responseHelper = require('express-response-helper').helper;
//const bodyParser = require('body-parser')
//const recipeRoutes = require('./routes/recipe');
//const foodRoutes = require('./routes/food');
//const historyRoutes = require('./routes/history');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(userRoutes);
//app.use(bodyParser.json());
//app.use(cors());
//app.use(responseHelper);
//app.use(recipeRoutes);
//app.use(foodRoutes);
//app.use(historyRoutes);

app.get("/", async (req, res) => {
    res.json({ status: "Response to this server is success" });
});


app.get("*", async (req, res) => {
    res.json({ status: "Route doesn't exist!" })
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});