import express from 'express';
import axios from 'axios';
const app = express();
const PORT = process.env.PORT || 5000;
const size = 10;
const API ='http://20.244.56.144/test';

let storedNumbers = [];

app.get('/numbers/:numberid', async (req, res) => {
    const { numberid } = req.params;

   
    try {
        const response = await axios.get(`${API}/${numberid}`);
        const number = response.data.number;

        const sum = storedNumbers.reduce((a, b) => a + b, 0);
        const average = storedNumbers.length > 0 ? sum / storedNumbers.length : 0;

        return res.json({
            storedNumbers: storedNumbers,
            average: average
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed ' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
