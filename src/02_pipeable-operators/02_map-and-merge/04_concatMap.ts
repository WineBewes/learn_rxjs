import { fromEvent, interval } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

export const show = () => {

    console.log('concatMap : maakt een queue van alle inner obs$ ' + 
    'en voert de volgende pas uit wanneer de eerste completed is');

    /*
      ONE inner subscription at a time
      
      dus ook weer een gevaarlijke operator voor memory leaks 
      want rekent erop dat alle innerlijke obs$ worden gecompleted !
      maar zorgt wel voor de juiste volgorde

      bv. bij het doorgeven van antwoorden aan BE-server
    */

    const interval$ = interval(1000);
    const click$ = fromEvent(document, 'click');

    click$.pipe(
      concatMap(() => interval$.pipe(take(3)))
    ).subscribe(console.log);

};