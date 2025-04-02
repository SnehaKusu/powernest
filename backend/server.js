require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// 1. First connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 2. Define schema and model AFTER connection
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true },
  phone: String,
  service: { type: String, required: true },
  message: String,
  company: String,
  jobTitle: String,
  country: String,
  createdAt: { type: Date, default: Date.now }
});

// 3. Create model AFTER schema definition
const Contact = mongoose.model('Contact', contactSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received data:', req.body); // Debug log
    
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    
    console.log('Saved to DB:', savedContact); // Debug log
    
    res.status(201).json({ 
      success: true,
      data: savedContact
    });
  } catch (error) {
    console.error('Database save error:', error);
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Database ready at ${process.env.MONGO_URI}`);
});