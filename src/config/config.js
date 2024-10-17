// require('dotenv').config();
require('dotenv').config({ path: __dirname + '/../../.env' });

const {
	POSTGRES_PASSWORD,
	POSTGRES_USER,
	POSTGRES_DB_NAME,
	POSTGRES_HOST,
	// POSTGRES_DIALECT,
} = process.env;

module.exports = {
	development: {
		username: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
		database: POSTGRES_DB_NAME,
		dialect: 'postgres',
		host: POSTGRES_HOST,
		logging: console.log,
		define: {
			underscored: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at',
		},
	},
};
