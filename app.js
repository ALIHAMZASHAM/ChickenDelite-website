const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const validator = require('validator');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/form-submit-url', (req, res) => {
    let formData = req.body;
    
    // Log the form data to the console
    console.log(formData);

    if (!validator.isEmail(formData.email)) {
        // Not a valid email
        res.status(400).send('Invalid email');
    } else {
        // Email is valid, proceed with storing the data...
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.get('/form-data', (req, res) => {
  MongoClient.connect('your-db-url', (err, client) => {
    if (err) return console.error(err);
    const db = client.db('your-db-name');
    const collection = db.collection('your-collection-name');

    collection.find({}).toArray((err, documents) => {
      if (err) return console.error(err);

      res.send(documents);
    });
  });
});
