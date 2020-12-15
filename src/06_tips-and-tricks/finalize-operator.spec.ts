import { interval } from "rxjs";
import { finalize, take } from "rxjs/operators";
import { TestScheduler } from "rxjs/testing";

describe('tips and tricks', () => {


  describe('finalize operator', () => {

    /*
    the "complete" callback is only called when the obs$ is completed
    It is ** NOT ** called when we unsubscribe from the obs$.

    when we want things to do after unsubscribing (or after error), we can use
    the "finalize" operator in the pipe

    */

    test('the complete callback only is called when the obs$ completes', (done) => {

      let message = '';

      const subscription = interval(500).
        pipe(
          take(3) // the 'take' operator makes sure the obs$ completes
        ).subscribe({
          next: () => message = 'busy',
          complete: () => message = 'done'
        }
        )

        setTimeout(() => {
          expect(message).toBe('done');
          done();

        }, 3000)

    });

    test('unsubscribe does not complete the obs$, so we use the "finalize" operator', (done) => {

      let message = '';

      const subscription = interval(500).
        pipe(
          finalize(() => message = 'done') // works with unsubscription & error
        ).subscribe({
          next: () => message = 'busy',
        }
        )

        setTimeout(() => {
          subscription.unsubscribe();
          expect(message).toBe('done');
          done();

        }, 3000)

    });


  });



});
