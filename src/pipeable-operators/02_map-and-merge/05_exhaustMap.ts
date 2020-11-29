import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

export const show = () => {

    console.log('exhaustMap : maakt een queue van alle inner obs$ ' + 
    'en voert de volgende pas uit wanneer de eerste completed is');

    /*
      ONE inner subscription at a time

      een nieuwe inner subscription wordt maar pas opgestart
      als de vorige beëindigd is, EN als een nieuwe waarde vanuit de outer ob$
      wordt uitgezonden.
      Maw. een waarde uitgezonden door de outer obs$ 
      tijdens de uitvoering van de 1e inner obs$ gaat verloren (en niet gequeued 
      zoals bij concatMap)
    */

    /*
        In dit voorbeeld : klikken tijdens de 1e interval doet niets
        klikken als de 1e interval gedaan is, start een nieuwe op
    */

    const interval$ = interval(1000);
    const click$ = fromEvent(document, 'click');

    click$.pipe(
      exhaustMap(() => interval$.pipe(take(3)))
    ).subscribe(console.log);

};