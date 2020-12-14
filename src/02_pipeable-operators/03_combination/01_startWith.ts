import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

export const show = () => {

    console.log('startWith starts an obs$ with the given value(s)' );

  const number$ = of(1, 2, 3);

  number$.pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
  ).subscribe(console.log);
};