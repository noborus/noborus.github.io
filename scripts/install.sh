#! /bin/sh

cd travis/jpug-doc
./configure
cd doc/src/sgml/
make ORIGINAL=1 html
