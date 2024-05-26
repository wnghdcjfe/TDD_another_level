const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

 
app.use(bodyParser.urlencoded({ extended: true }));

 
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
  });
  
   
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
   
    if (email && password) {
      res.send(`Welcome, ${email}!`);
    } else {
      res.send('Login failed. Please provide both email and password.');
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });