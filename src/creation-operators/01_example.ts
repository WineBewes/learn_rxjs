import { Observable } from 'rxjs';

export const show = () => {

  console.log('Observable and observer / observer functions');

  const observer = {
    next: (value: any) => console.log('next', value),
    error: (error: any) => console.log('error', error),
    complete: () => console.log('completed')
  };

  const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
  });

  console.log('before');
  observable.subscribe(observer);
  console.log('after');

}