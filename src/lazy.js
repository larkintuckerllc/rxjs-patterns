/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';

Observable.create((observer) => {
  console.log('Hello');
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
