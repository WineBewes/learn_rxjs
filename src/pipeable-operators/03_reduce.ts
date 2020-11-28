import { from, interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

export const show = () => {

  /* reduce : 2 waarden  accumalated en current
  
    neemt de geacummuleerder waarde en doet daar de reduce functie op (bv. optellen)

    zendt maar 1 x de geaccumuleerde waarde uit, nl. bij completion van de source obs$.

    (indien de source obs$ niet complete, dan geen waarde !)
  */


  const numbers = [1, 2, 3 , 4, 5];

  const totalReducer = (accumulatedValue: any, currentValue: any) => {

    console.log({acc: accumulatedValue, curr: currentValue});
    return accumulatedValue + currentValue;

  };

  //const total = numbers.reduce(totalReducer, 0);
  
  //console.log(total);

  interval(1000).pipe(
    take(3),
    reduce(totalReducer, 0)
  ).subscribe({
    next: console.log,
    complete: ()=> console.log('complete')
  });
};