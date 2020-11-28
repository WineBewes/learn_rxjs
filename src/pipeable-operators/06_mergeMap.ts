import { from } from 'rxjs';
import { map, mergeAll, mergeMap, filter } from 'rxjs/operators';

export const show = () => {

    console.log('mergeAll and the combination mergeAll and map (shorthand: mergeMap \n'+
    'can be used when the map of the first observable emits another observable');

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
    ).subscribe(x => console.log(x));

    // this can be written as :

    a$.pipe(
      mergeMap((x) => 
        b$.pipe(
          filter((y) => x.id === y.id), 
          map((y) => {
            return { id: x.id, naam: x.naam, opm: y.opm}; 
          })))
    ).subscribe(x => console.log(x));


};