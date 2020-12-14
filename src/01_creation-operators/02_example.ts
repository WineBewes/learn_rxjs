import { Observable } from 'rxjs';

export const show = () => {

  console.log('asynchronous : interval');

  const observer = {
    next: (value: any) => console.log('next', value),
    error: (error: any) => console.log('error', error),
    complete: () => console.log('completed')
  };

  const observable = new Observable(subscriber => {
    let count = 0;
    const id = setInterval(() => {
        subscriber.next(count);
        count += 1;
    }, 1000);

    return () => {
      console.log('clearInterval called');
       clearInterval(id);

    }
  });

  const subscription = observable.subscribe(observer);

  const subscriptionTwo = observable.subscribe(observer);

  subscription.add(subscriptionTwo);
  
  setTimeout(() => {
    // this will NOT complete the observable, i.e. the method 'complete' will not be called
    subscription.unsubscribe();
  }, 3500);


}