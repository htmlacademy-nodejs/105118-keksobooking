'use strict';

const request = require(`supertest`);
const bodyParser = require(`body-parser`);
const assert = require(`assert`);
const express = require(`express`);
const {generateEntity} = require(`../src/generateEntity`);

const offersStoreMock = require(`./mock/offers-store-mock`);
const offersRouter = require(`../src/offers/route`)(offersStoreMock);

const app = express();
app.use(bodyParser.json());
app.use(`/api/offers`, offersRouter);


describe(`GET /api/offers`, () => {
  it(`should return entity with date`, async () => {
    const DATE = `3.11.1971`;
    const res = await request(app)
      .get(`/api/offers/${DATE}`)
      .set(`Accept`, `application/json`)
      .expect(200)
      .expect(`Content-Type`, /json/);
    assert(res.body.filter((item) => item.date === DATE).length > 0, `wrong elements with data`);
  });

  it(`should return json with offres`, async () => {
    const res = await request(app)
      .get(`/api/offers`)
      .set(`Accept`, `application/json`)
      .expect(200)
      .expect(`Content-Type`, /json/);
    assert(res.body.data.length === 20, `should return 20 elements`);
  });

  it(`Should return data from request`, async () => {
    const {offer, author} = await generateEntity();
    const {
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      description,
      features,
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
        name: author.name,
      })
      .attach(`photos`, `test/photos/muffin.png`)
      .set(`Accept`, `applicattion/json`)
      .set(`Content-Type`, `multipart/form-data`)
      .expect(200)
      .expect(`Content-type`, /json/);

    const result = {
      title: res.body.title,
      address: res.body.address,
      price: res.body.price,
      type: res.body.type,
      rooms: res.body.rooms,
      guests: res.body.guests,
      checkin: res.body.checkin,
      checkout: res.body.checkout,
      features: res.body.features,
      description: res.body.description,
      photos: res.body.photos,
      name: res.body.name,
    };

    assert.deepEqual(result, {
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
      },
      name: author.name,
    });
  });

});
