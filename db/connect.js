const mongoose = require('mongoose');

const url = `mongodb+srv://Atul:6199@nodeexpressprojects.vniqudy.mongodb.net/Finder?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB Connection Successful...`);
  })
  .catch((error) => {
    console.log(`${error}\nDB Connection Failed...`);
  });
