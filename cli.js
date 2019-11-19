#!/usr/bin/env node
console.log("hello world my cli");
// 根据附带参数 执行相应的代码
function run(argv) {
if (argv[0] === '-v' || argv[0] === '--version') {
console.log('version is 1.0.0');
}
else if (argv[0] === '-h' || argv[0] === '--help') {
console.log('usage:\n');
console.log('-v --version [show version]')
}
}
//  运行 勿忘
run(process.argv.slice(2));