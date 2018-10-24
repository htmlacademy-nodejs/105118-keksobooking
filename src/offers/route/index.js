'use strict';

const express = require(`express`);

const defaultRoute = require(`./default`);

const offersRouter = new express.Router();

defaultRoute(offersRouter);

module.exports = offersRouter;
