import { from } from 'rxjs';
import { delay } from 'rxjs/operators';

export const show = () => {

  console.log('merge');

  /*
  
  */

 const a$ = from([{ id: 1, naam: 'X'}, {id: 2, naam: 'Y'}, {id: 3, naam: 'Z'}]);
 const b$ = from([{ id: 1, opm: 'o1'}, {id: 2, opm: 'o2'}, {id: 3, opm: 'o3'}]);

};