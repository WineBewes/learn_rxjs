/*

to unsubscribe automatically

do not forget to complete the destroying obs$ !
*/

import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

describe('takeUntil', () => {

    test('easy way to unsubscribe from various obs$', (done) => {

        const destroy$ = new Subject();

        interval(1000).pipe(
          takeUntil(destroy$)
        ).subscribe(v => console.log('obs$1', v));

        interval(500).pipe(
          takeUntil(destroy$)
        ).subscribe(v => console.log('obs$2', v))

        setTimeout(() => {
          destroy$.next();
          destroy$.complete(); // do not forget to complete the destroying obs$ !
          done();
        }, 3000);

    });

});