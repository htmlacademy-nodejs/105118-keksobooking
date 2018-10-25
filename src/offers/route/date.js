'use strict';

const {asyncMiddleware} = require(`../../../utils`);
const {generateEntity} = require(`../../generateEntity`);

module.exports = (offersRouter) => {
  offersRouter.get(`/:date`, asyncMiddleware(async (req, res) => {
    res.send(generateEntity(req.params.date));
  }));
};
