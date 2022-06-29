import request from 'supertest';
import app from '../app.js';
import { expect } from '@jest/globals';
import { pool } from '../db/index.js';

afterAll(() => {
  pool.end();
});

it('GETS all projects and read first object value of name = "Bob"', async function () {
  const response = await request(app)
    .get('/projects')
    .set('Accept', 'application/json');
  expect(response.status).toEqual(200);
  expect(response.body[0].name).toEqual('Bob');
});

describe('POST /projects and check if it is really posted by checking the last name of the json', function () {
  it('responds with json', async function () {
    const projects = await request(app).get('/projects');
    const response = await request(app)
      .post('/projects')
      .send({ name: 'john' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    for (let i = 0; i < projects.body.length; i++) {
      expect(projects.body[projects.body.length - 1].name).toEqual('john');
    }
  });
});

it(`GET query depending on the project type and availability. In this case, expect the first to be Blog 
and the latter Weekends`, async function () {
  const response = await request(app)
    .get('/projects?name=Blog&aval=Weekends')
    .set('Accept', 'application/json');
  expect(response.status).toEqual(200);
  for (let i = 0; i < response.body.length; i++) {
    expect(response.body[i].project_type).toEqual('Blog');
    expect(response.body[i].availability).toEqual('Weekends');
  }
});
