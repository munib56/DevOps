const request = require('supertest');
const app = require('./app');  // Assuming your main file is 'app.js'

test('GET / should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
});
