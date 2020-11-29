import { from } from 'rxjs';
import { scan } from 'rxjs/operators';

export const show = () => {

    /* scan : 2 waarden  accumalated en current
  
    neemt de geacummuleerder waarde en doet daar de reduce functie op (bv. optellen)

    zendt  telkens de geaccumuleerde waarde uit als als de source ob$ uitzendt.
  */
 const numbers = [1, 2, 3 , 4, 5];

  const totalReducer = (accumulatedValue: any, currentValue: any) => {

    console.log({acc: accumulatedValue, curr: currentValue});
    return accumulatedValue + currentValue;

  };

  from(numbers).pipe(
    scan(totalReducer, 0)
  ).subscribe({
    next: console.log,
    complete: ()=> console.log('complete')
  });
};