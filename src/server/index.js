import express from "express";

import renderIso from './renderIso.js';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static("public"));

app.get('*', (req, res) => {
  const html = renderIso(req.path);
  res.status(200).send(html);
});

app.listen(PORT, e =>
  e ? console.error(e) : console.log(`Served on port PORT`)
);
