'use strict';

const express = require(`express`);
const multer = require(`multer`);
const {asyncMiddleware} = require(`../../../utils`);
const validate = require(`../validate`);

const jsonParser = express.json();
const upload = multer({storage: multer.memoryStorage()});

const PAGE_DEFAULT_LIMIT = 20;

const toPage = async (cursor, skip = 0, limit = PAGE_DEFAULT_LIMIT) => {
  const packet = await cursor.skip(skip).limit(limit).toArray();
  return {
    data: packet,
    skip,
    limit,
    total: await cursor.count(),
  };
};

module.exports = (offersRouter) => {
  offersRouter.get(``, asyncMiddleware(async (req, res) => {
    res.send(await toPage(
        await offersRouter.offersStore.getOffers(),
        req.query.from,
        req.query.to,
    ));
  }));

  offersRouter.post(
      ``,
      jsonParser,
      upload.single(`photos`),
      asyncMiddleware(async (req, res) => {
        const file = req.file;

        await validate(req.body);

        await offersRouter.offersStore.createOffer(req.body);

        if (file) {
          req.body.photos = {name: file.originalname};
        }

        res.send(req.body);
      }
      )
  );
};
