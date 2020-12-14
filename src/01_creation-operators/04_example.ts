import { of, range, from } from 'rxjs';

export const show = () => {

  console.log('of,range & from creation operators');

  const observer = {
    next: (value: any) => console.log('next', value),
    error: (err: any) => console.log('error', err),
    complete: () => console.log('completed')
  };

  // of = array wordt doorgegeven als array ('from' : als afzonderlijke elementen)
  const source$ = of([1], 2, 3, 4, 5)

  source$.subscribe(observer);

  // range
  const sourceRange$ = range(1, 5);

  sourceRange$.subscribe(observer);

  // from is a more intelligent 'of' operator
  const sourceFrom$ = from('[1, 2, 3, 4, 5]');

  sourceFrom$.subscribe(observer);

  const sourceFromWebFrom$ = from(fetch(
    'https://api.github.com/users/octocat'
  ));

  sourceFromWebFrom$.subscribe(observer);

}