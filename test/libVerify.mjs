// -*- coding: utf-8, tab-width: 2 -*-

import eq from 'equal-pmb';
import sen from '../index.js';

function verify(how) {
  const { altSymb, altName, ...r } = how;
  console.debug('#', r);
  eq(sen(r.Z), r);
  eq(sen(String(r.Z)), r);
  eq(sen(r.name), r);
  eq(sen(r.symb), r);
  verify.alt(altSymb, 'symb', 'ol', r);
  verify.alt(altName, 'name', '', r);
}

Object.assign(verify, {


  alt(list, fixed, suf, r) {
    if (!list) { return; }
    console.debug('#\talternative ' + fixed + suf
      + (list.length >= 2 ? 's' : '') + ':\t%s', list);
    list.forEach(x => eq(sen(x), { ...r, fixed, origInput: x }));
  },


  bad(b, ...a) {
    if (a.length) { return [b, ...a]; }
    console.debug('#', { bad: b });
    [].concat(b).forEach(x => eq(sen(x), false));
  },


});




export default verify;
