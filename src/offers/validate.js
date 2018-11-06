'use strict';

const utils = require(`../../utils`);
const ValidationError = require(`../errors/validation`);

const validate = ({
  title,
  type,
  price,
  address,
  checkin,
  checkout,
  rooms,
  features = [],
  name,
}) => {
  const errors = [];
  if (
    !(
      title.length < 140
      && title.length > 20
    )
  ) {
    errors.push(`Field name "title" is required!`);
  }

  const TYPE = [
    `flat`,
    `house`,
    `bungalo`,
    `palace`,
  ];

  if (
    !TYPE.some((item) => item === type)
  ) {
    errors.push(`Field name "type" is required and must be one of ${TYPE.join(``)}!`);
  }

  if (
    !(!isNaN(price)
    && price >= 1
    && price <= 100000)
  ) {
    errors.push(`Field name "price" is required and must be in range(1-1000)!`);
  }

  if (
    !(
      /^\d{1,45}, \d{1,45}$/.test(address)
    )
  ) {
    errors.push(`Field name "address" is required and must be less then 100!`);
  }

  if (
    !(/^\d{2}:\d{2}$/.test(checkin)
    && checkin.slice(`:`)[0] < 25
    && checkin.slice(`:`)[1] < 61)
  ) {
    errors.push(`Field name "checkin" is required and should have format HH:mm!!`);
  }
  if (
    !(/^\d{2}:\d{2}$/.test(checkout)
    && checkout.slice(`:`)[0] < 25
    && checkout.slice(`:`)[1] < 61)
  ) {
    errors.push(`Field name "checkout" is required and should have format HH:mm!`);
  }

  if (
    !/[0-9]/.test(rooms)
    || rooms < 0
    || rooms > 1000
  ) {
    errors.push(`Field name "rooms" is required and shloud be more then 0 and less then 1000!`);
  }

  const FEATURES = [
    `dishwasher`,
    `elevator`,
    `conditioner`,
    `parking`,
    `washer`,
    `wifi`,
  ];
  if (
    !(
      features.filter((item) =>
        FEATURES.includes(item),
      )
      || utils.getUniqArray(features).length === features.length)
  ) {
    errors.push(`Field name "features" should be unique and contain one of values ${FEATURES.join(``)}!`);
  }


  const NAMES = [
    `Keks`,
    `Pavel`,
    `Nikolay`,
    `Alex`,
    `Ulyana`,
    `Anastasyia`,
    `Julia`,
  ];

  if (!name) {
    name = NAMES[utils.randomChoice];
  }

  if (errors.length > 0) {
    throw new ValidationError(errors);
  }

  return {
    title,
    type,
    price,
    address,
    checkin,
    checkout,
    rooms,
    features,
    name,
  };
};

module.exports = validate;
