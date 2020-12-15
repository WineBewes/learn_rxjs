// met toArray operator kunnen we een obs$ operator makkelijk controleren

import { of } from "rxjs";
import { delay, map, mergeMap, toArray } from "rxjs/operators";

describe('subscribe and assert tests', () => {

  test('met toArray operator om een array als eindresultaat te krijgen', () => {

    const source$ = of(1, 2, 3);
    const final$ = source$.pipe(
      map((val) => val * 10),
      toArray() //naar array
    );

    const expected = [10, 20, 30];

    final$.subscribe(ar => {
      expect(ar).toEqual(expected);
    });

  });

});


test('met "done" callback voor async operations', (done) => {

  const source$ = of('Ready', 'Set', 'Go!').pipe(
    mergeMap((message, index) => of(message).pipe(
      delay(index * 1000)
    )) 
  );

  const expected = ['Ready', 'Set', 'Go!'];
  let index = 0;

  source$.subscribe(val => {
    expect(val).toEqual(expected[index]);
    index++;
  }, null, done);

});