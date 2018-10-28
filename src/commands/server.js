'use strict';

const express = require(`express`);
const offersRouter = require(`../offers/route`);

module.exports = {
  name: `server`,
  description: `Start static http server`,
  execute(port = `3000`) {
    const app = express();

    const STATIC_ROOT = `static`;

    app.use(`/api/offers`, offersRouter);
    app.use(`/`, express.static(STATIC_ROOT));

    app.use(`*`, (req, res) => {
      res.send(`${req.originalUrl} - Page not found`);
    });

    app.listen(port, () => {
      console.log(`Server start at port ${port}`);
    });
  },
};
