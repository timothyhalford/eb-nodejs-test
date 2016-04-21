var app = require('../index');
var request = require('supertest');

describe('GET /', function() {
	it('responds with status 200', function(done) {
		request(app)
			.get('/')
			.expect(200, done);
	});
	it('responds with a nice message', function(done) {
		request(app)
			.get('/')
			.expect('Hello World2!', done)
	});
});
