import { interval, concat } from 'rxjs';
import { take } from 'rxjs/operators';

export const show = () => {

  console.log('concat queues multiple obs$');

  /*
  de obs$ moeten wel completen !
  */

  const interval$ = interval(1000);

  concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2))
  ).subscribe(console.log);
};