#!/bin/bash
set -e
rm archive.zip && zip -rq archive . 
aws lambda update-function-code --function-name generate-pdf --zip-file fileb://archive.zip
