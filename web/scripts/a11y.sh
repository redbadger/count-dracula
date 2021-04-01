#!/bin/bash
yarn workspace web start &
yarn workspace web run wait-on http://localhost:3000
server_pid=$!
yarn workspace web run pa11y-ci --config .pa11yci.json
test_exit_code=$?
kill $server_pid
exit $test_exit_code

