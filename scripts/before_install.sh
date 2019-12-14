#!/bin/bash

mkdir travis
git clone --depth=1 -b doc_ja_11 https://github.com/pgsql-jp/jpug-doc.git travis/jpug-doc

mkdir -p ~/.fonts/
cp scripts/fonts/* ~/.fonts/
fc-cache -f -v
