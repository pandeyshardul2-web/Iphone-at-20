const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to process the payment
app.post('/process-payment', async (req, res) => {
    const { upiId, amount, note } = req.body;

    try {
        // Replace with your actual payment processor API
        const response = await axios.post('https://upi-api.example.com/initiate-payment', {
            upiId,
            amount,
            note
        });

        if (response.data.success) {
            res.send('Payment successful!');
        } else {
            res.send('Payment failed.');
        }
    } catch (error) {
        console.error('Error processing payment:', error);
        res.send('An error occurred during payment processing.');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});
