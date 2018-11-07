'use strict';

const db = require(`../database/db`);

const setupCollection = async () => {
  const dBase = await db;

  const collection = dBase.collection(`offers`);
  return collection;
};

class OffersStore {
  constructor(collection) {
    this.collection = collection;
  }

  async getOffers() {
    return (await this.collection).find();
  }

  async getOffersWithDate(date) {
    return (await this.collection).find({date});
  }

  async createOffer({
    title,
    type,
    price,
    address,
    checkin,
    checkout,
    rooms,
    features,
    name,
  }) {
    const offers = {
      author: {
        name,
        avatar: ``,
      },
      offer: {
        title,
        description: ``,
        address,
        price,
        type,
        rooms,
        guests: ``,
        checkin,
        checkout,
        features,
        photos: ``,
      },
      location: {
        x: address,
        y: address,
      },
      date: Date.now(),
    };
    (await this.collection).insertOne(offers);
    return {
      title,
      description: ``,
      address,
      price,
      type,
      rooms,
      guests: ``,
      checkin,
      checkout,
      features,
      location: {
        x: address,
        y: address,
      },
      name,
    };
  }
}

module.exports = new OffersStore(setupCollection().
  catch((e) => console.log(`Failed to set up "wizards"-collection`, e)));
