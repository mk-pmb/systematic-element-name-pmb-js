// -*- coding: utf-8, tab-width: 2 -*-
/* eslint-disable object-property-newline */

import v from './libVerify.mjs';

v({ Z: 123, symb: 'Ubt', name: 'Unbitrium' });
v({ Z: 333, symb: 'Ttt', name: 'Tritritrium' });
v({ Z: 420, symb: 'Qbn', name: 'Quadbinilium' });
v({ Z: 666, symb: 'Hhh', name: 'Hexhexhexium' });
v({ Z: 809, symb: 'One', name: 'Octnilennium' });
v({ Z: 999, symb: 'Eee', name: 'Ennennennium' });

v({ Z: 902, symb: 'Enb', name: 'Ennilbium',
  altName: [
    'Ennnilbium', // triple n
    'Ennilbiium', // double i
    'Ennnilbiium', // both
    'eNnNiLbIiUm', // inofficial letter case
  ],
  altSymb: ['eNB'],
});


v.bad('');
v.bad(0);
v.bad('000');
v.bad('Oni');
v.bad('Nnn');
v.bad('Nilnilium');
v.bad('Hello');













console.info('+OK basics test passed.');
