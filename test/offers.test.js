'use strict';

const request = require(`supertest`);
const assert = require(`assert`);
const express = require(`express`);
const offersRouter = require(`../src/offers/route`);

const app = express();

app.use(`/api/offers`, offersRouter);

describe(`GET /api/offers`, () => {
  it(`should return json with offres`, async () => {
    const res = await request(app)
      .get(`/api/offers`)
      .set(`Accept`, `application/json`)
      .expect(200)
      .expect(`Content-Type`, /json/);
    assert(res.body.length === 20, `wrong length`);
  });

  it(`should return entity with date`, async () => {
    const res = await request(app)
      .get(`/api/offers/3.11.1971`)
      .set(`Accept`, `application/json`)
      .expect(200)
      .expect(`Content-Type`, /json/);
    assert(res.body.date === `3.11.1971`, `wrong data length`);
  });
});
