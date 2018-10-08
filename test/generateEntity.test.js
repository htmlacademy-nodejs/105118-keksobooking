'use strict';

const assert = require(`assert`);

const {
  generateEntity,
  titles,
  MIN_PRICE,
  MAX_PRICE,
  types,
  MIN_NUMBER_OF_ROOMS,
  MAX_NUMBER_OF_ROOMS,
  MIN_NUMBER_OF_GUESTS,
  MAX_NUMBER_OF_GUESTS,
  checkins,
  checkouts,
  features,
  photos,
  MIN_X_LOCATION,
  MAX_X_LOCATION,
  MIN_Y_LOCATION,
  MAX_Y_LOCATION,
  WEEK_MS,
} = require(`../src/generateEntity.js`);

describe(`Check that generateEntity generate data properly`, () => {
  it(`should return avatar: string`, () => {
    assert(
        generateEntity
        .genAuthorAvatar()
        .match(
            /https:\/\/robohash.org\/([a-z,A-Z,0-9]{1,100})\.png/
        ),
        `String not match`,
    );
  });
  it(`should return one of titles`, () => {
    assert(
        titles
        .includes(
            generateEntity.genOfferTitle()
        ),
        `wrong title`,
    );
  });
  it(`should return address {{location.x}}, {{location.y}}`, () => {
    const currentAddress = generateEntity.genOfferAddress();
    assert(
        currentAddress.match(
            /^\{\{[0-9]{0,3}[.]{0,1}([0-9]{0,5})\}\},\s\{\{[0-9]{0,3}[.]{0,1}([0-9]{0,5})\}\}$/
        ),
        `String not match`,
    );
  });
  it(`should return price(number > 1 000 and < 1 000 000 `, () => {
    const currentPrice = generateEntity.genOfferPrice();
    assert(
        currentPrice >= MIN_PRICE
        && currentPrice <= MAX_PRICE,
        `${currentPrice} - wrong price`,
    );
  });
  it(`should return one of type values`, () => {
    const currentType = generateEntity.genOfferType();
    assert(
        types
        .includes(
            currentType,
        ),
        `${currentType} - wrong type`,
    );
  });
  it(`should return rooms number(5 > number > 0)`, () => {
    const currentRoomsNumber = generateEntity.genOfferRoomsNumber();
    assert(
        currentRoomsNumber >= MIN_NUMBER_OF_ROOMS
        && currentRoomsNumber <= MAX_NUMBER_OF_ROOMS,
        `${currentRoomsNumber} - wrong rooms number`,
    );
  });
  it(`should return guests number`, () => {
    const currentGuestsNumber = generateEntity.genOfferNuberOfGuests();
    assert(
        currentGuestsNumber >= MIN_NUMBER_OF_GUESTS
        && currentGuestsNumber <= MAX_NUMBER_OF_GUESTS,
        `${currentGuestsNumber} - wrong guests number`,
    );
  });
  it(`should return one of checkin(12:00, 13:00, 14:00)`, () => {
    const currentCheckin = generateEntity.genOfferCheckin();
    assert(
        checkins
        .includes(
            currentCheckin,
        ),
        `wrong checkin`,
    );
  });
  it(`should return one of checkout(12:00, 13:00, 14:00)`, () => {
    const currentCheckout = generateEntity.genOfferCheckout();
    assert(
        checkouts
        .includes(
            currentCheckout,
        ),
        `wrong checkout`,
    );
  });
  it(`should return features array of unic strings`, () => {
    const currentFeatures = generateEntity.getOfferFeatures();
    assert(
        currentFeatures.every((value) => features.includes(value))
        && Array.from(new Set(currentFeatures)).length === currentFeatures.length,
        `wrong feature - invlid strings or non uniq value`,
    );
  });
  it(`should return empty strings`, () => {
    assert(
        generateEntity.getOfferDescription().length === 0,
        `string is not empty`,
    );
  });
  it(`shoud return array of strings in random order`, () => {
    const currentPhotos = generateEntity.getOfferPhotos();
    assert(
        currentPhotos.every((value) => photos.includes(value)),
        `wrong array`,
    );
  });
  it(`shoud return object: {x: 300-900, y:150-500}`, () => {
    const currentLocation = generateEntity.getLoction();
    assert(
        currentLocation.x >= MIN_X_LOCATION
        && currentLocation.x <= MAX_X_LOCATION
        && currentLocation.y >= MIN_Y_LOCATION
        && currentLocation.y <= MAX_Y_LOCATION,
        `wrong object`,
    );
  });
  it(`shoud return timestamp`, () => {
    const currentDate = generateEntity.getDate();
    const now = Date.now();
    assert(
        currentDate >= now - WEEK_MS
        && currentDate <= now,
        `wrong date`,
    );
  });
});
