'use strict';

const {asyncMiddleware} = require(`../../../utils`);

module.exports = (offersRouter) => {
  offersRouter.get(`/:date`, asyncMiddleware(async (req, res) => {
    res.send((await offersRouter.offersStore.getOffersWithDate(req.params.date)));
  }));
};
