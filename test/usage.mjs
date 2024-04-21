// -*- coding: utf-8, tab-width: 2 -*-
/* eslint-disable object-property-newline */

import eq from 'equal-pmb';

import systematicElementName from '../index.js';

eq(systematicElementName(123),
  { Z: 123, symb: 'Ubt', name: 'Unbitrium' });

eq(systematicElementName('Ubt'),
  { Z: 123, symb: 'Ubt', name: 'Unbitrium' });

eq(systematicElementName('Unbitrium'),
  { Z: 123, symb: 'Ubt', name: 'Unbitrium' });

eq(systematicElementName('uNbiTriiUm'),
  { Z: 123, symb: 'Ubt', name: 'Unbitrium',
    fixed: 'name',  origInput: 'uNbiTriiUm' });

eq(systematicElementName('uBT'),
  { Z: 123, symb: 'Ubt', name: 'Unbitrium',
    fixed: 'symb', origInput: 'uBT' });






console.info('+OK usage test passed.');
