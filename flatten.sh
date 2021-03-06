#!/usr/bin/env sh

# ran into trouble using nu's get helper
# so am using jq
# https://github.com/stedolan/jq
jq '[.data.repository.labels.edges | .[] | .node | {name, description, createdAt, issue_count: .issues.totalCount, pull_request_count: .pullRequests.totalCount}]' < labels-data.json > labels-data-with-counts.json

./node_modules/.bin/json2csv --input labels-data-with-counts.json > labels-data-with-counts.csv
rm labels-data-with-counts.json
