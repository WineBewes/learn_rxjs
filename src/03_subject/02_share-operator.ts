import { ConnectableObservable, interval, Observable, Subject } from 'rxjs';
import { multicast, refCount, share, take, tap } from 'rxjs/operators';
import { createObserver } from '../observer-factory';

export const show = () => {

  /*

  een andere manier om te multicasten is een gewone obs$
  pipen met de "share" operator

  Deze operator is eigenlijk de combinatie van de operatoren
  - "multicast" (die de obs$ inderdaad multicast en een Subject nodig heeft
  - "countRef" (om met de multicaste 
                  i. te connectern
                  ii. te unsubscriben)
  */

  const manieren = ['subject', 'multicast', 'countRef', 'share']
  let manier = 'share';
  console.log('met ' + manier);

  const interval$ = interval(2000).pipe(
    take(5),
    tap(i => console.log('new interval', i))
  );

  // 1. manier met subject
  if (manier === 'subject') {

    const subject = new Subject();
  
    interval$.subscribe(subject);
  
    const subscriptionOne = subject.subscribe(createObserver());
    const subscriptionTwo = subject.subscribe(createObserver());  
  }

  // 2. met multicasted obs$

  // multicast operator returns a * CONNECTABLE OBSERVABLE * 
  // on which you should connect to

  if (manier === 'multicast') {

    const multicastedInterval$ = interval$.pipe(
      multicast(() => new Subject())
    );

    // connecting to the source subject
    // and put it into a subscription
    const connectSubscription = (multicastedInterval$ as ConnectableObservable<Observable<number>>)
        .connect();

    const subOne = multicastedInterval$.subscribe(createObserver());
    const subTwo = multicastedInterval$.subscribe(createObserver());  
  
    setTimeout(() => {
      /* no longer necessary
        subOne.unsubscribe();
        subTwo.unsubscribe();
      */
      // to unsubscribe from the underlying source obs$ (subject)
      connectSubscription.unsubscribe();
    }, 3000);
  }

  // een gemakkelijker manier om bovenstaand te schrijven (refCount) :
  // geen "connect" meer, ook geen "unsubscribe" van de ConnectableObservable
  if (manier === 'refCount') {

    const multicastedInterval$ = interval$.pipe(
      multicast(() => new Subject()),
      refCount()
    );

    const subOne = multicastedInterval$.subscribe(createObserver());
    const subTwo = multicastedInterval$.subscribe(createObserver());  
  
    setTimeout(() => {
        subOne.unsubscribe();
        subTwo.unsubscribe();
    }, 3000);
  }
  
  // nog gemakkelijker : share = multicast + refCount
  if (manier === 'share') {

    const multicastedInterval$ = interval$.pipe(
      share()
    );

    const subOne = multicastedInterval$.subscribe(createObserver());
    const subTwo = multicastedInterval$.subscribe(createObserver());  
  
    setTimeout(() => {
        subOne.unsubscribe();
        subTwo.unsubscribe();
    }, 3000);
  }
};