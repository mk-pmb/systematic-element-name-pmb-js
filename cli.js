#!/usr/bin/env node
/* -*- coding: UTF-8, tab-width: 2 -*- */
/* eslint-disable spaced-comment, no-var, n/shebang */
/*jslint indent: 2, maxlen: 80, browser: true */
'use strict';

var sen = require('./index.js');

process.argv.slice(2).forEach(function c(a) {
  var r = sen(a);
  if (r) { console.log(sen(a)); } else { console.error('invalid:', a); }
});
