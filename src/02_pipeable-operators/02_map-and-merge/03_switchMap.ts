import { from } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';

export const show = () => {

    console.log('switchMap : unlike mergeMap, ' + 
    'switchMap only maintains ONE inner subscription at a time');

    /*
      switchMap is een dus veiliger keuze dan mergeMap
    */

    const a$ = from([{ id: 1, naam: 'X'}, {id: 2, naam: 'Y'}, {id: 3, naam: 'Z'}]);
    const b$ = from([{ id: 1, opm: 'o1'}, {id: 2, opm: 'o2'}, {id: 3, opm: 'o3'}]);
    
    a$.pipe(
      switchMap((x) => 
        b$.pipe(
          filter((y) => x.id === y.id), 
          map((y) => {
            return { id: x.id, naam: x.naam, opm: y.opm}; 
          })))
    ).subscribe(console.log);
};