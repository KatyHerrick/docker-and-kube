const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
	// Redis doesn't understand this name, but docker-compose sets up containers
	// on the same network, so Docker will redirect this to the redis container.
	host: 'redis-server',
	port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
	process.exit(0);
	client.get('visits', (err, visits) => {
		res.send('Number of visits is ' + visits);
		client.set('visits', parseInt(visits) + 1);
	});
});

app.listen(8081, () => {
	console.log('Listening on port 8081');
});