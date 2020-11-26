import { interval, timer } from 'rxjs';

export const show = () => {

  console.log('interval & timer creation operators');

  const sourceInterval$ = interval(1000);

  const subscription = sourceInterval$.subscribe(console.log);

  const timer$ = timer(0, 2000);

  subscription.add(timer$.subscribe(console.log));

  setTimeout(() => {

    subscription.unsubscribe();

  }, 5000);


}