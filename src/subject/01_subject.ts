import { Subject } from 'rxjs';

export const show = () => {

  const observer = {
    next: (value: any) => console.log('next', value),
    error: (error: any) => console.log('error', error),
    complete: () => console.log('completed')
  };


  const subject$ = new Subject();

  const subscription = subject$.subscribe(observer);

  subject$.next('Hello');

  const subscriptionTwo = subject$.subscribe(observer);

  subject$.next('World');
 
};