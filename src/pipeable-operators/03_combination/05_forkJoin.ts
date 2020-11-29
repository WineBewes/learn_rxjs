import { forkJoin } from 'rxjs';

export const show = () => {

  console.log('forkJoin does about the same as combineLatest ' + 
  'with 2 major changes : ' + 
  '1. ALL the source obs$ should complete' + 
  '2. only the LAST value of each source obs$ are emitted in an array');

  /*
  
  */

};