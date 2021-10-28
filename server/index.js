const path = require("path");
const express = require("express"); // npm installed
const { API_TOKEN, CAMPUS } = require('../config.js');
const axios = require('axios');
const apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use((req, res) => {
  axios({
    method: req.method,
    url: req.url,
    baseURL: apiURL,
    headers: {
      Authorization: API_TOKEN
    }
  })
  .then((response) => {
    console.log('here is your stuff: ', response.data);
    res.status(200).send(response.data);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send(err)
  })
})

app.listen(3000, console.log('Connected to the island'));