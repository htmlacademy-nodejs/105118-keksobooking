'use strict';

const utils = require(`../utils`);

const titlesList = [
  `Большая уютная квартира`,
  `Маленькая неуютная квартира`,
  `Огромный прекрасный дворец`,
  `Маленький ужасный дворец`,
  `Красивый гостевой домик`,
  `Некрасивый негостеприимный домик`,
  `Уютное бунгало далеко от моря`,
  `Неуютное бунгало по колено в воде`,
];

const typesList = [
  `flat`,
  `palace`,
  `house`,
  `bungalo`,
];

const checkinsList = [
  `12:00`,
  `13:00`,
  `14:00`,
];

const checkoutsList = [
  `12:00`,
  `13:00`,
  `14:00`,
];

const featuresList = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`,
];

const photosList = [
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

const generateEntity = () => ({
  avatar: `https://robohash.org/${Date.now()}.png`,

  offer: {
    title: utils.randomChoice(titlesList),

    address:
      `{{${utils.randomRange(
          OFFER_COORDINATE_FROM,
          OFFER_COORDINATE_TO,
      )}}}, {{${utils.randomRange(
          OFFER_COORDINATE_FROM,
          OFFER_COORDINATE_TO,
      )}}}`,

    price: utils.randomRange(MIN_PRICE, MAX_PRICE),

    type: utils.randomChoice(typesList),

    rooms: utils.randomRange(MIN_NUMBER_OF_ROOMS, MAX_NUMBER_OF_ROOMS),

    guests: utils.randomRange(MIN_NUMBER_OF_GUESTS, MAX_NUMBER_OF_GUESTS),

    checkin: utils.randomChoice(checkinsList),

    checkout: utils.randomChoice(checkoutsList),

    features:
      utils.getUniqArray(
          featuresList.filter(
              utils.isRandomEven
          )
      ),

    description: ``,

    photos: photosList.concat().sort(utils.isRandomEven),
  },
  location: {
    x: utils.randomRange(MIN_X_LOCATION, MAX_X_LOCATION),
    y: utils.randomRange(MIN_Y_LOCATION, MAX_Y_LOCATION),
  },

  date: Date.now() - utils.randomRange(DATE_FROM, WEEK_MS),
});

module.exports = {
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
};
