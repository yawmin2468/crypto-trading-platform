const express = require('express');
const app = express();
app.use(express.json());

// Import modules
const { matchOrder } = require('./orderMatching');
const { getBalance } = require('./wallet');
const { generateToken, verifyToken } = require('./auth');

// Routes
app.post('/api/orders', (req, res) => {
  // Simplified example
  const result = matchOrder(req.body);
  res.json(result);
});

app.get('/api/wallet/:address', async (req, res) => {
  const balance = await getBalance(req.params.address);
  res.json({ balance });
});

app.post('/api/auth/login', (req, res) => {
  // Call generateToken
  const { user } = req.body;
  const token = generateToken(user);
  res.json({ token });
});

app.listen(3000, () => console.log('Backend running on port 3000'));