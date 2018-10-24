'use strict';

const {asyncMiddleware} = require(`../../../utils`);
const {generateEntity} = require(`../../generateEntity`);

module.exports = (offersRouter) => {
  offersRouter.get(``, asyncMiddleware(async (req, res) => {
    if (
      isNaN(req.query.limit)
      || isNaN(req.query.skip)
    ) {
      res.send(`Invalid query!`);
    }

    const max = req.query.limit + req.query.skip;
    const generatedData = [];

    for (let i = 0; i < max; i++) {
      generatedData.push(generateEntity());
    }

    res.send();
  }));
};
