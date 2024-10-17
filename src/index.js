require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(3000, () => {
	console.log(`Server running on port : ${PORT} `);
});
