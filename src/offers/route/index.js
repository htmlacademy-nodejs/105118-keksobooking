'use strict';

const express = require(`express`);

const defaultRoute = require(`./default`);
const dateRoute = require(`./date`);
const errorRoute = require(`./error`);

const offersRouter = new express.Router();

defaultRoute(offersRouter);
dateRoute(offersRouter);
errorRoute(offersRouter);

module.exports = offersRouter;
