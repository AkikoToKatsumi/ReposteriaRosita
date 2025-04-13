import express from 'express';
import cors from 'cors'; // Add CORS middleware
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS to allow requests from the frontend
app.use(cors());

// Use the auth routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("❌ Error:", err.message);
  res.status(err.status || 500).json({ message: err.message || "Error interno del servidor" });
});

// Start the server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
