'use strict';

const express = require(`express`);
const multer = require(`multer`);
const {asyncMiddleware} = require(`../../../utils`);
const {generateEntity} = require(`../../generateEntity`);
const NotFound = require(`../../errors/notFound`);
const validate = require(`../validate`);

const jsonParser = express.json();
const upload = multer({storage: multer.memoryStorage()});

const queryValidator = ({
  limit,
  skip,
}) => {
  if (!limit || !skip) {
    return false;
  }
  if (isNaN(limit) || isNaN(skip)) {
    throw new NotFound(`Not found: limit - "${limit}" and skip - "${skip}" should be numbers`);
  }
  return true;
};

const generateNumberOfEntities = (length) => {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(generateEntity());
  }
  return data;
};

module.exports = (offersRouter) => {
  offersRouter.get(``, asyncMiddleware(async (req, res) => {
    let entityLength = 20;

    if (queryValidator(req.query)) {
      entityLength = req.query.limit;
    }

    res.send(await generateNumberOfEntities(entityLength));
  }));

  offersRouter.post(
      ``,
      jsonParser,
      upload.single(`photos`),
      asyncMiddleware(async (req, res) => {
        const file = req.file;

        await validate(req.body, req.headers[`content-type`]);

        if (file) {
          req.body.photos = {name: file.originalname};
        }

        res.send(req.body);
      })
  );
};
