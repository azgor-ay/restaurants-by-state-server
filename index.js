const express = require('express');
const fetch = require('isomorphic-fetch');
const cors = require('cors'); // Import the cors package
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Endpoint to fetch data from the external API
app.get('/api/restaurants', async (req, res) => {
  try {
    const response = await fetch('https://nextjs-orpin-omega-98.vercel.app/api/restaurants');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handling root endpoint
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
