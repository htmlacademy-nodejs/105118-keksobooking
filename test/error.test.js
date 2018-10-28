'use strict';

const request = require(`supertest`);
const express = require(`express`);

const app = express();

app.get(`/unknown`);

describe(`GET/POST 404`, () => {
  it(`should return 404`, async () => {
    await request(app)
      .get(`/api/unknown`)
      .expect(404);
  });
});
