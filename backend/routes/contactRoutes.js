const express = require('express');
const router = express.Router();

// Contact Form API (Simulated Database)
const contactMessages = [];

// POST: Save contact form submission
router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    contactMessages.push({ name, email, message });
    res.status(201).json({ message: 'Message received successfully!' });
});

// GET: Retrieve messages (for testing)
router.get('/', (req, res) => {
    res.json(contactMessages);
});

module.exports = router;
