// -*- coding: utf-8, tab-width: 2 -*-

import v from './libVerify.mjs';

// Examples for symbol conflicts arising when using systematic symbols
// for atomic numbers below 100:

// H 1 Hydrogen, U 92 Uranium, C 6 Carbon
v({ Z: 1,   symb: 'U',  name: 'Unium' });
v({ Z: 6,   symb: 'H',  name: 'Hexium' });
v({ Z: 92,  symb: 'Eb', name: 'Ennbium' });

// He 2 Helium, B 5 Boron, P 15 Phosphorus
v({ Z: 2,   symb: 'B',  name: 'Bium' });
v({ Z: 5,   symb: 'P',  name: 'Pentium' });
v({ Z: 15,  symb: 'Up', name: 'Unpentium' });
v({ Z: 69,  symb: 'He', name: 'Hexennium' });

// N 7 Nitrogen, S 16 Sulfur
v({ Z: 7,   symb: 'S',   name: 'Septium' });
v.bad('N', 'Nilium');
v({ Z: 16,  symb: 'Uh',  name: 'Unhexium' });

// O 8 Oxygen
v({ Z: 8,   symb: 'O', name: 'Octium' });

// Be 4 Beryllium, Cu 29 Copper
v({ Z: 4,   symb: 'Q',  name: 'Quadium' });
v({ Z: 29,  symb: 'Be', name: 'Biennium' });

// Fe 26 Iron, Bh 107 Bohrium
v({ Z: 26,  symb: 'Bh', name: 'Bihexium' });
v({ Z: 107, symb: 'Uns',  name: 'Unnilseptium' });

// Bk 97 Berkelium, Es 99 Einsteinium
v({ Z: 97,  symb: 'Es', name: 'Ennseptium' });
v({ Z: 99,  symb: 'Ee', name: 'Ennennium' });

// … Eu He Ho Hs Nb Ne Nh No Np Os Pb Po Pt Pu Sb Se Sn Tb Te Th Ts





console.info('+OK conflicts test passed.');
