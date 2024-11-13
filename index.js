import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', async (req, res) => {
  res.render('home.ejs');
});

app.listen(port, () => {
  console.log("Sunucu Başlatıldı.");
});