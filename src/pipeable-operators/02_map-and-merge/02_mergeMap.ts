import { from } from 'rxjs';
import { map, mergeAll, mergeMap, filter } from 'rxjs/operators';

export const show = () => {

    console.log('mergeAll and the combination mergeAll and map (shorthand: mergeMap \n'+
    'can be used when the map of the outer obs$ returns an inner obs$');

    const a$ = from([{ id: 1, naam: 'X'}, {id: 2, naam: 'Y'}, {id: 3, naam: 'Z'}]);
    const b$ = from([{ id: 1, opm: 'o1'}, {id: 2, opm: 'o2'}, {id: 3, opm: 'o3'}]);
    
    a$.pipe(
      map((x) => 
        b$.pipe(
          filter((y) => x.id === y.id), 
          map((y) => {
            return { id: x.id, naam: x.naam, opm: y.opm}; 
          }))),
          mergeAll()
    ).subscribe(console.log);

    console.log('this can be written as :');

    a$.pipe(
      mergeMap((x) => 
        b$.pipe(
          filter((y) => x.id === y.id), 
          map((y) => {
            return { id: x.id, naam: x.naam, opm: y.opm}; 
          })))
    ).subscribe(console.log);

    /*
          voor elke waarde die de buiten obs$ uitzendt,
          creëert mergeMap een nieuwe obs$ !
          => opgelet dus voor memory leaks !!!
          
    */

};