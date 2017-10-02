#!/usr/bin/env node

import * as program from 'commander';

program
  .version('0.0.0')
  .usage('<action> <name>')
  .option('start [name]', 'Start project')
  .option('app [name]', 'Create application')
  .action((...args) => {
    if (args.some(arg => 'string' === typeof arg)) {
      console.error('Bad option');
      process.exit(1);
    }
  })
  .parse(process.argv);

if (program.start) {
  console.log(`start project: ${program.start}`);
}

if (program.app) {
  console.log(`create app: ${program.app}`);
}
