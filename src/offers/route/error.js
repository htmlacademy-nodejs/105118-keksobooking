'use strict';

module.exports = (offersRouter) => {
  const notFound = (req, res) => {
    res.status(404).send(`Page not found!`);
  };

  const errorHandler = (err, req, res, next) => {
    res.status(err.code || 500).send(err.message);
    next(err);
  };

  offersRouter.use(errorHandler);
  offersRouter.use(notFound);
};
