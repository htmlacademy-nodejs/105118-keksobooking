'use strict';

const utils = require(`../utils`);

const titles = [
  `Большая уютная квартира`,
  `Маленькая неуютная квартира`,
  `Огромный прекрасный дворец`,
  `Маленький ужасный дворец`,
  `Красивый гостевой домик`,
  `Некрасивый негостеприимный домик`,
  `Уютное бунгало далеко от моря`,
  `Неуютное бунгало по колено в воде`,
];

const types = [
  `flat`,
  `palace`,
  `house`,
  `bungalo`,
];

const checkins = [
  `12:00`,
  `13:00`,
  `14:00`,
];

const checkouts = [
  `12:00`,
  `13:00`,
  `14:00`,
];

const features = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`,
];

const photos = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`,
];

const MIN_X_LOCATION = 300;
const MAX_X_LOCATION = 900;
const MIN_Y_LOCATION = 150;
const MAX_Y_LOCATION = 500;

const OFFER_COORDINATE_FROM = 0;
const OFFER_COORDINATE_TO = 360;

const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;

const MIN_NUMBER_OF_ROOMS = 1;
const MAX_NUMBER_OF_ROOMS = 5;

const MIN_NUMBER_OF_GUESTS = 1;
const MAX_NUMBER_OF_GUESTS = 12;

const WEEK_MS = 36288000000;
const DATE_FROM = 0;

const generateEntity = (() => ({
  genAuthorAvatar: () =>
    `https://robohash.org/${Date.now()}.png`,

  genOfferTitle: () =>
    utils.randomChoice(titles),

  genOfferAddress: () =>
    `{{${utils.randomRange(
        OFFER_COORDINATE_FROM,
        OFFER_COORDINATE_TO,
    )}}}, {{${utils.randomRange(
        OFFER_COORDINATE_FROM,
        OFFER_COORDINATE_TO,
    )}}}`,

  genOfferPrice: () =>
    utils.randomRange(MIN_PRICE, MAX_PRICE),

  genOfferType: () =>
    utils.randomChoice(types),

  genOfferRoomsNumber: () =>
    utils.randomRange(MIN_NUMBER_OF_ROOMS, MAX_NUMBER_OF_ROOMS),

  genOfferNuberOfGuests: () =>
    utils.randomRange(MIN_NUMBER_OF_GUESTS, MAX_NUMBER_OF_GUESTS),

  genOfferCheckin: () =>
    utils.randomChoice(checkins),

  genOfferCheckout: () =>
    utils.randomChoice(checkouts),

  getOfferFeatures: () =>
    utils.getUniqArray(
        features.filter(
            utils.isRandomEven
        )
    ),

  getOfferDescription: () => ``,

  getOfferPhotos: () =>
    photos.concat().sort(utils.isRandomEven),

  getLoction: () => ({
    x: utils.randomRange(MIN_X_LOCATION, MAX_X_LOCATION),
    y: utils.randomRange(MIN_Y_LOCATION, MAX_Y_LOCATION),
  }),

  getDate: () =>
    Date.now() - utils.randomRange(DATE_FROM, WEEK_MS),
}))();

module.exports = {
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
};
