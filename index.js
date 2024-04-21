/* -*- coding: UTF-8, tab-width: 2 -*- */
/* eslint-disable
  spaced-comment,
  strict,
  no-var,
  one-var,
  one-var-declaration-per-line,
  */
/*jslint indent: 2, maxlen: 80, browser: true */
/*global define */
(function prepare() {
  'use strict';
  var EX;

  function uc1(s) { return s.slice(0, 1).toUpperCase() + s.slice(1); }

  function mustIndexOf(a, x) {
    var i = a.indexOf(x);
    if (i >= 0) { return i; }
    throw new Error('Erroneous match: ' + x + ' not in [' + a + ']');
  }

  function contractNumericalRoots(name) {
    return name.replace(/(en)n(nil)/ig, '$1$2').replace(/i(ium)$/, '$1');
  }

  function uncontractNumericalRoots(name) {
    return name.replace(/(en)(nil)/ig,
      '$1n$2').replace(/(b|tr)(ium)$/i, '$1i$2');
  }

  function makeReport(z, n, s, f) {
    var c = contractNumericalRoots(n + 'ium'),
      r = { Z: +z, symb: uc1(s), name: uc1(c) };
    if (f) { r.fixed = f; }
    return r;
  }


  function fromZ(strZ) {
    var f, z = (+strZ || 0), s = '', n = '';
    if (z < 1) { return; }
    if (z.toFixed(0) !== strZ) { return; }
    f = function p(d) {
      s += EX.symbolLetters[d];
      n += EX.numericalRoots[d];
      return '';
    };
    if (strZ.replace(/\d/g, f)) { return; }
    return makeReport(strZ, n, s);
  }


  function fromName(input) {
    var a = EX.numericalRoots, f, strZ = '', s = '', n = '';
    if (input.slice(-3) !== 'ium') { return; }
    f = function p(m) {
      var d = mustIndexOf(a, m);
      strZ += d;
      s += EX.symbolLetters[d];
      n += EX.numericalRoots[d];
      return '';
    };
    f = uncontractNumericalRoots(input).slice(0,
      -3).replace(new RegExp(EX.numericalRootRegExp, 'g'), f);
    if (f) { return; }
    return makeReport(strZ, n, s, 'name');
  }


  function fromSymb(s) {
    var a = EX.symbolLetters.all, f, strZ = '', n = '';
    f = function p(m) {
      var d = mustIndexOf(a, m);
      strZ += d;
      n += EX.numericalRoots[d];
      return '';
    };
    f = s.replace(new RegExp('[' + EX.symbolLetters + ']', 'g'), f);
    if (f) { return; }
    return makeReport(strZ, n, s, 'symb');
  }


  EX = function parse(input) {
    var lc = String(input || '').toLowerCase(), r;
    if (lc.startsWith('n')) { return false; }
    if (!lc) { return false; }
    r = (fromZ(lc) || fromName(lc) || fromSymb(lc));
    if (!r) { return false; }
    if (r.fixed) {
      if (r[r.fixed] === input) {
        delete r.fixed;
      } else {
        r.origInput = input;
      }
    }
    return r;
  };
  EX.contractNumericalRoots = contractNumericalRoots;
  EX.uncontractNumericalRoots = uncontractNumericalRoots;

  (function namespace() {
    var a = 'nubtqphsoe',
      s = a.split(''),
      w = 'nil|un|bi|tri|quad|pent|hex|sept|oct|enn';
    s.all = a;
    EX.symbolLetters = s;
    EX.numericalRoots = w.split('|');
    EX.numericalRootRegExp = '(?:' + w + '?)';
  }());
























  (function unifiedExport(e) {
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function f() { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(EX));

  return EX;
}());
