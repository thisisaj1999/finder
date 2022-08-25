const express = require('express');
require('./db/connect');
const Finder = require('./models/finder');

const app = express();
app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Routes

app.get('/', (req, res) => {
  console.log(__dirname);
});

app.post('/', async (req, res) => {
  try {
    const user = new Finder({
      username: req.body.username,
    });
    await user.save();
    res.status(201).render('warning', {
      warning: `"${req.body.username}" Added to the DataBase`,
    });
    console.log(__dirname);
  } catch (error) {
    res.status(400).render('warning', {
      warning: `"${req.body.username}" Already exists`,
    });
  }
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
