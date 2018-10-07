'use strict';

const utils = require(`../utils`);

const TITLE = [
  `Большая уютная квартира`,
  `Маленькая неуютная квартира`,
  `Огромный прекрасный дворец`,
  `Маленький ужасный дворец`,
  `Красивый гостевой домик`,
  `Некрасивый негостеприимный домик`,
  `Уютное бунгало далеко от моря`,
  `Неуютное бунгало по колено в воде`,
];

const TYPE = [
  `flat`,
  `palace`,
  `house`,
  `bungalo`,
];

const CHECKIN = [
  `12:00`,
  `13:00`,
  `14:00`,
];

const CHECKOUT = [
  `12:00`,
  `13:00`,
  `14:00`,
];

const FEATURES = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`,
];

const PHOTOS = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`,
];

const MIN_X_LOCATION = 300;
const MAX_X_LOCATION = 900;
const MIN_Y_LOCATION = 150;
const MAX_Y_LOCATION = 500;

const TITLE_NUM_FROM = 0;
const TITLE_NUM_TO = TITLE.length;

const OFFER_COORDINATE_FROM = 0;
const OFFER_COORDINATE_TO = 360;

const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;

const TYPE_NUM_FROM = 0;
const TYPE_NUM_TO = TYPE.length;

const MIN_NUMBER_OF_ROOMS = 1;
const MAX_NUMBER_OF_ROOMS = 5;

const MIN_NUMBER_OF_GUESTS = 1;

const CHECKINS_FROM = 0;
const MAX_NUMBER_OF_GUESTS = 12;
const CHECKINS_TO = CHECKIN.length;

const CHECKOUTS_FROM = 0;
const CHECKOUTS_TO = CHECKOUT.length;

const WEEK_MS = 36288000000;
const DATE_FROM = 0;

class generateEntity {
  static genAuthorAvatar() {
    return `https://robohash.org/${Date.now()}.png`;
  }
  static genOfferTitle() {
    return TITLE[utils.randomRange(TITLE_NUM_FROM, TITLE_NUM_TO)];
  }
  static genOfferAddress() {
    return `{{${utils.randomRange(
        OFFER_COORDINATE_FROM,
        OFFER_COORDINATE_TO,
    )}}}, {{${utils.randomRange(
        OFFER_COORDINATE_FROM,
        OFFER_COORDINATE_TO,
    )}}}`;
  }
  static genOfferPrice() {
    return utils.randomRange(MIN_PRICE, MAX_PRICE);
  }
  static genOfferType() {
    return TYPE[utils.randomRange(TYPE_NUM_FROM, TYPE_NUM_TO)];
  }
  static genOfferRoomsNumber() {
    return utils.randomRange(MIN_NUMBER_OF_ROOMS, MAX_NUMBER_OF_ROOMS);
  }
  static genOfferNuberOfGuests() {
    return utils.randomRange(MIN_NUMBER_OF_GUESTS, MAX_NUMBER_OF_GUESTS);
  }
  static genOfferCheckin() {
    return CHECKIN[utils.randomRange(CHECKINS_FROM, CHECKINS_TO)];
  }
  static genOfferCheckout() {
    return CHECKOUT[utils.randomRange(CHECKOUTS_FROM, CHECKOUTS_TO)];
  }
  static getOfferFeatures() {
    return utils.getUniqArray(
        FEATURES.filter(
            utils.isRandomEven
        )
    );
  }
  static getOfferDescription() {
    return ``;
  }
  static getOfferPhotos() {
    return PHOTOS.concat().sort(utils.isRandomEven);
  }
  static getLoction() {
    return {
      x: utils.randomRange(MIN_X_LOCATION, MAX_X_LOCATION),
      y: utils.randomRange(MIN_Y_LOCATION, MAX_Y_LOCATION),
    };
  }
  static getDate() {
    return Date.now() - utils.randomRange(DATE_FROM, WEEK_MS);
  }
}

module.exports.generateEntity = {
  generateEntity,
  TITLE,
  MIN_PRICE,
  MAX_PRICE,
  TYPE,
  MIN_NUMBER_OF_ROOMS,
  MAX_NUMBER_OF_ROOMS,
  MIN_NUMBER_OF_GUESTS,
  MAX_NUMBER_OF_GUESTS,
  CHECKIN,
  CHECKOUT,
  FEATURES,
  PHOTOS,
  MIN_X_LOCATION,
  MAX_X_LOCATION,
  MIN_Y_LOCATION,
  MAX_Y_LOCATION,
  WEEK_MS,
};
