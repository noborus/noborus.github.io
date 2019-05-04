#!/bin/bash

openssl aes-256-cbc -K $encrypted_28f593a07933_key -iv $encrypted_28f593a07933_iv -in deploy_key.enc -out ~/.ssh/id_rsa -d
chmod 600 ~/.ssh/id_rsa
echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
git config --global user.email "noborusai@gmail.com"
git config --global user.name "noborus"

mkdir travis
git clone --depth=1 -b doc_ja_11 https://github.com/pgsql-jp/jpug-doc.git travis/jpug-doc

