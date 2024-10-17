require('dotenv').config();
const { sequelize } = require('./models/');

const express = require('express');

const app = express();

app.use(express.json());

const startServer = async function () {
	try {
		await sequelize.authenticate();
		console.log('database connected');
		const PORT = process.env.PORT || 3000;
		app.listen(PORT);
		console.log(`--- Server started on ${PORT} ---\n\n`);
	} catch (err) {
		console.log('Database connection failed', err);
		console.log('Error: ', err.message);
	}
};

startServer();
