import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend API is up and running!',
    timestamp: new Date(),
  });
});

app.get('/api/message', (req, res) => {
  res.json({
    text: 'Hello from the Express Server! The connection is established successfully.',
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
