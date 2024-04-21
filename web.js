/* -*- coding: UTF-8, tab-width: 2 -*- */
/* eslint-disable
  spaced-comment,
  strict,
  no-var,
  one-var,
  one-var-declaration-per-line,
  */
/*jslint indent: 2, maxlen: 80, continue: true, unparam: true, browser: true */
/* global window, document */
(function init() {
  'use strict';

  var systematicElementName = window.module.exports,
    inField = document.getElementById('orig'),
    outDest = document.getElementById('results');

  inField.convertNow = function convertNow() {
    var r = systematicElementName(inField.value), h;
    if (r) {
      h = 'Atomic number: ' + r.Z;
      if ((r.Z < 100) || (r.z > 999)) {
        h += ' &larr; <b>Warning:</b> Outside of intended range.';
      }
      h += '<br>\nSystematic element symbol: ' + r.symb;
      if (r.fixed === 'symb') { h += ' (adjusted)'; }
      if (r.Z < 100) {
        h += ' &larr; <b>Warning:</b> May conflict with a known element.';
      }
      h += '<br>\nSystematic element name: ' + r.name;
      if (r.fixed === 'name') { h += ' (adjusted)'; }
      outDest.innerHTML = h;
    } else {
      outDest.innerHTML = '(invalid)';
    }
  };

  inField.onchange  = inField.convertNow;
  inField.onkeydown = inField.convertNow;
  inField.onkeyup   = inField.convertNow;

  document.forms[0].onsubmit = function onsubmit() {
    inField.convertNow();
    inField.select();
    return false;
  };

  inField.convertNow();
  setTimeout(function t() { inField.focus(); inField.select(); }, 500);
}());
