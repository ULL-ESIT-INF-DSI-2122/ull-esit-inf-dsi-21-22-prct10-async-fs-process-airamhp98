import {readFile} from 'fs';
import {SourceMap} from 'module';

/**
 * funcion add que suma los numeros del txt
 */
export function add() {
  readFile('numberlist.txt', (err, data) => {
    if (err) {
      // eslint-disable-next-line max-len
      console.log('There must be a problem with the file you are trying to read');
    } else {
      const num = data.toString();
      const numArray = Array.from(num);
      let sum:number = 0;
      numArray.forEach((numbr) => sum += +numbr);
      console.log(sum);
    }
  });
}

add();
