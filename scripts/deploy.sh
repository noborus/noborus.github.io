#!/bin/sh

openssl aes-256-cbc -K $encrypted_28f593a07933_key -iv $encrypted_28f593a07933_iv -in scripts/deploy_key.enc -out ~/.ssh/id_rsa -d
chmod 600 ~/.ssh/id_rsa
echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
git config --global user.email "noborusai@gmail.com"
git config --global user.name "noborus"
git clone --depth=50 git@github.com/noborus/noborus.github.io.git

cp -aR travis/jpug-doc/doc/src/sgml/html current/
git add -A current
git commit -m "by Travis CI (JOB $TRAVIS_JOB_NUMBER)"
git push origin master
