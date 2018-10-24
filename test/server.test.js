'use strict';

const request = require(`supertest`);
const assert = require(`assert`);
const express = require(`express`);
const offersRouter = require(`../src/offers/route`);

const app = express();

app.use(`/api/offers`, offersRouter);

const validateQuery = (value) => {
  return Array.from(value)
    .filter((item) =>
      /^\d{1,3}$/.test(item)
    );
}

describe(`GET /api/offers`, () => {
  it(`should return json with offres from "skip" to "skip + limit"`, async () => {
    const res = await request(app)
      .get(`/api/offers`)
      .set(`Accept`, `application/json`)
      .expect(200)
      .expect(`Content-Type`, /json/);
    assert(res.body.hasOwnProperty(`avatar`), `wrong length`);
  });
});
