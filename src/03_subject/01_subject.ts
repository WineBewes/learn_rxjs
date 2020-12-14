import { Subject } from 'rxjs';
import { createObserver } from '../observer-factory';

export const show = () => {

  const subject$ = new Subject();

  const subscription = subject$.subscribe(createObserver());

  subject$.next('Hello');

  const subscriptionTwo = subject$.subscribe(createObserver());

  subject$.next('World');
 
};