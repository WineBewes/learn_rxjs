import { interval, fromEvent } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

export const show = () => {

    console.log('take is eenvoudig : neem enkel de aangegeven hoeveelheid');

    // interval geeft een oplopende integer elke aangegeven tijd in milliseconds
    interval(500)
      .pipe(
        take(4)
        )
      .subscribe(console.log);

      console.log('takeUntil vergt een 2e obs$. Van zodra deze obs$ een waarde uitzendt, stopt de 1e');  

      const click$ = fromEvent(document, 'click');

      interval(500)
        .pipe(
          takeUntil(click$)
        )
        .subscribe(console.log)
};