
isBreakOnError=$1
node createTests.js $isBreakOnError

chmod +x ./.test.temp.sh
./.test.temp.sh

rm .test.temp.sh
