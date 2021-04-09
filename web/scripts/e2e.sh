#!/bin/bash
yarn workspace web start &
yarn workspace web run wait-on http://localhost:3000
server_pid=$!
yarn workspace web run jest --config ./e2e/jest.config.js ./e2e/test.ts --json --outputFile=./test-results/e2e-tests/results.json
test_exit_code=$?
kill $server_pid
exit $test_exit_code

