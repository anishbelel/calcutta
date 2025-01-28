import express from 'express';
import { execFile } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'; // Import CORS middleware
// Import required modules
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle GET request with query   parameters
app.get('/', (req, res) => {
  const { x, y } = req.query;

  if (!x || !y) {
    return res.status(400).send('Both x and y query parameters are required.');
  }

  // Execute the C++ program with x and y as arguments
  execFile(path.join(__dirname, 'compute'), [x, y], (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      res.status(500).send(stderr);
      return;
    }
    // Assuming the C++ program outputs the result z
    const output = stdout.trim(); // Trim any leading/trailing whitespace
    const vec = output.split(' '); // Split by space, keeping them as strings // Split by space and convert to integers
    
    res.json({ vec });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
