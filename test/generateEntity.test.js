'use strict';

const assert = require(`assert`);

const {
  generateEntity,
  titlesList,
  MIN_PRICE,
  MAX_PRICE,
  typesList,
  MIN_NUMBER_OF_ROOMS,
  MAX_NUMBER_OF_ROOMS,
  MIN_NUMBER_OF_GUESTS,
  MAX_NUMBER_OF_GUESTS,
  checkinsList,
  checkoutsList,
  featuresList,
  photosList,
  MIN_X_LOCATION,
  MAX_X_LOCATION,
  MIN_Y_LOCATION,
  MAX_Y_LOCATION,
  WEEK_MS,
} = require(`../src/generateEntity.js`);

describe(`Check that generateEntity generate data properly`, () => {
  const entity = generateEntity();
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
    photos,
  } = entity.offer;
  it(`should return avatar: string`, () => {
    assert(
        entity.avatar
          .match(
              /https:\/\/robohash.org\/([a-z,A-Z,0-9]{1,100})\.png/
          ),
        `String not match`,
    );
  });
  it(`should return one of titles`, () => {
    assert(
        titlesList
        .includes(
            title
        ),
        `wrong title`,
    );
  });
  it(`should return address {{location.x}}, {{location.y}}`, () => {
    assert(
        address.match(
            /^\{\{[0-9]{0,3}[.]{0,1}([0-9]{0,5})\}\},\s\{\{[0-9]{0,3}[.]{0,1}([0-9]{0,5})\}\}$/
        ),
        `String not match`,
    );
  });
  it(`should return price(number > 1 000 and < 1 000 000 `, () => {
    assert(
        price >= MIN_PRICE
        && price <= MAX_PRICE,
        `${price} - wrong price`,
    );
  });
  it(`should return one of type values`, () => {
    assert(
        typesList
        .includes(
            type,
        ),
        `${type} - wrong type`,
    );
  });
  it(`should return rooms number(5 > number > 0)`, () => {
    assert(
        rooms >= MIN_NUMBER_OF_ROOMS
        && rooms <= MAX_NUMBER_OF_ROOMS,
        `${rooms} - wrong rooms number`,
    );
  });
  it(`should return guests number`, () => {
    assert(
        guests >= MIN_NUMBER_OF_GUESTS
        && guests <= MAX_NUMBER_OF_GUESTS,
        `${guests} - wrong guests number`,
    );
  });
  it(`should return one of checkin(12:00, 13:00, 14:00)`, () => {
    assert(
        checkinsList
        .includes(
            checkin,
        ),
        `wrong checkin`,
    );
  });
  it(`should return one of checkout(12:00, 13:00, 14:00)`, () => {
    assert(
        checkoutsList
        .includes(
            checkout,
        ),
        `wrong checkout`,
    );
  });
  it(`should return features array of unic strings`, () => {
    assert(
        features.every((value) => featuresList.includes(value))
        && Array.from(new Set(features)).length === features.length,
        `wrong feature - invlid strings or non uniq value`,
    );
  });
  it(`should return empty strings`, () => {
    assert(
        description.length === 0,
        `string is not empty`,
    );
  });
  it(`shoud return array of strings in random order`, () => {
    assert(
        photos.every((value) => photosList.includes(value)),
        `wrong array`,
    );
  });
  it(`shoud return object: {x: 300-900, y:150-500}`, () => {
    const currentLocation = entity.location;
    assert(
        currentLocation.x >= MIN_X_LOCATION
        && currentLocation.x <= MAX_X_LOCATION
        && currentLocation.y >= MIN_Y_LOCATION
        && currentLocation.y <= MAX_Y_LOCATION,
        `wrong object`,
    );
  });
  it(`shoud return timestamp`, () => {
    const now = Date.now();
    assert(
        entity.date >= now - WEEK_MS
        && entity.date <= now,
        `wrong date`,
    );
  });
});
