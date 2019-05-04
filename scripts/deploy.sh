#!/bin/sh

mkdir current
mv travis/jpug-doc/doc/src/sgml/html current/
git add -A current
git commit -m "update"
git push origin master
