'use strict';

const request = require(`supertest`);
const bodyParser = require(`body-parser`);
const assert = require(`assert`);
const express = require(`express`);
const offersRouter = require(`../src/offers/route`);
const {generateEntity} = require(`../src/generateEntity`);

const app = express();
app.use(bodyParser.json());
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

  it(`Should return data from request`, async () => {
    const {offer} = await generateEntity();
    const result = await request(app)
      .post(`/api/offers`)
      .send(offer)
      .set(`Accept`, `application/json`)
      .set(`Content-Type`, `application/json`)
      .expect(200)
      .expect(`Content-type`, /json/);
    assert.deepEqual(result.body, offer);
  });

  it(`Should return data from request`, async () => {
    const {offer} = await generateEntity();
    const {
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description,
    } = offer;
    const res = await request(app)
      .post(`/api/offers`)
      .field({
        title,
        address,
        price,
        type,
        rooms,
        guests,
        checkin,
        checkout,
        features,
        description,
      })
      .attach(`photos`, `test/photos/muffin.png`)
      .set(`Accept`, `applicattion/json`)
      .set(`Content-Type`, `multipart/form-data`)
      .expect(200)
      .expect(`Content-type`, /json/);
    assert.deepEqual(res.body, {
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description,
      photos: {
        name: `muffin.png`,
      }
    });
  });
});
