#!/bin/bash

git add -N current
if ! git diff --name-only current|grep -E -v "bookindex.html|postgres-A4.pdf" ;
then
    echo "Do not update"
    exit 0
fi

echo "Update because there is a difference"
sed -i -e "s/last-updated:.*$/last-updated: $(TZ=Asia/Tokyo date "+%Y-%m-%d %T %Z")/" index.md
git add -A current
git commit -m "by Travis CI (JOB $TRAVIS_JOB_NUMBER) [skip ci]"
git push ssh://git@github.com/noborus/noborus.github.io.git master:master
