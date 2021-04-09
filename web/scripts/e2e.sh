#!/bin/bash
server_pid=$!
yarn workspace web run jest --config ./e2e/jest.config.js ./e2e/test.ts --json
test_exit_code=$?
kill $server_pid
exit $test_exit_code

