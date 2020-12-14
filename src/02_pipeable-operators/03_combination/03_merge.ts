import { from, merge, interval } from 'rxjs';
import { take, delay } from 'rxjs/operators';

export const show = () => {

  console.log('merge combines multiple obs$ to 1 obs$');

  /*
  
  */

 const a$ = interval(1000).pipe(take(10)); // from([{ id: 1, naam: 'X'}, {id: 2, naam: 'Y'}, {id: 3, naam: 'Z'}]);
 const b$ = interval(1250).pipe(take(10)); //from([{ id: 1, opm: 'o1'}, {id: 2, opm: 'o2'}, {id: 3, opm: 'o3'}]);

 merge(a$, b$)
 .subscribe(console.log);

};