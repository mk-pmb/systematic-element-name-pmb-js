
<!--#echo json="package.json" key="name" underline="=" -->
systematic-element-name-pmb
===========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Translate between hypothetical elements&#39; atomic number, their systematic
element name, and their symbol.
<!--/#echo -->


In chemistry and physics, hypothetical chemical elements whose existence has
not yet been proven are assigned a temporary
[systematic element name][wp-sename] based on their [Atomic number][wp-atnum].

* [Try it live online][ghp-try]

  [wp-sename]: https://en.wikipedia.org/wiki/Systematic_element_name
  [wp-atnum]: https://en.wikipedia.org/wiki/Atomic_number
  [ghp-try]: https://mk-pmb.github.io/systematic-element-name-pmb-js/web.html



API
---

This module exports one function:

### parse(input)

Translate `input`, which may be

* an atomic number given as a Number or as a string of decimal digits,
* a string with the systematic element name,
* or a string with the systematic symbol.

For valid inputs, returns an object like
`{ Z: 123, symb: 'Ubt': name: 'Unbitrium' }`.

For almost-valid inputs (e.g. non-standard letter case or lack of contraction
for dounle "i" or triple "n"), two additional properties are added:

* `fixed`: Which field (`'symb'` or `'name'`)
  contains the corrected version of the input value.
* `origInput`: The original input value.

For invalid inputs, returns `false`.



Usage
-----

see [test/usage.mjs](test/usage.mjs).



Range restriction
-----------------

In chemistry, systematic element names are meant to be used only for elements
with 3-digit atomic numbers.
This library ignores this restriction, and will happily parse and produce
systematic symbols that will conflict with the symbols of known elements.

See [test/conflicts.mjs](test/conflicts.mjs) for examples.


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
