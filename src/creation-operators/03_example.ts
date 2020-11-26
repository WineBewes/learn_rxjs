import { fromEvent } from 'rxjs';

export const show = () => {

  console.log('fromEvent creation operator');

  const observer = {
    next: (value: any) => console.log('next', value),
    error: (err: any) => console.log('error', err),
    complete: () => console.log('completed')
  }

  const source$ = fromEvent(document, 'keyup');

  const subOne = source$.subscribe(observer);
  const subTwo = source$.subscribe(observer);

  setTimeout(() => {
    console.log('unsubscribing');
    subOne.unsubscribe();
  }, 3000);

}