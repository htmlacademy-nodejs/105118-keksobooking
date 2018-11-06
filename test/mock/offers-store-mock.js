'use strict';

const Cursor = require(`./cursor-mock`);
const generatedEntitys = require(`../generator`);

class WizardStoreMock {
  constructor(data) {
    this.data = data;
  }

  async getOffers() {
    return new Cursor(this.data);
  }

  async getOffersWithDate() {
    return [this.data[19]];
  }

  async createOffer() {
    return {};
  }
}

module.exports = new WizardStoreMock(generatedEntitys());
