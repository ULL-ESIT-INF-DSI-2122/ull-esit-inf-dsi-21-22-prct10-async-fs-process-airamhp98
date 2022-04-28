import {watch} from 'fs';
import {spawn} from 'child_process';
// import * as suma from './suma';
import {argv} from 'process';


console.log(`Watching for file changes on ${'numberlist.txt'}`);

watch(argv[2], (event, filename) => {
  if (filename) {
    console.log(`${filename} file Changed`);
    const sumprocess = spawn('node', ['suma.js', argv[2]]);
    sumprocess.stdout.pipe(process.stdout);
  }
});
