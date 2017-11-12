/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';

const myObservable = Observable.create((observer) => {
  console.log('Hello');
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
myObservable.subscribe(o => console.log(o));
myObservable.subscribe(o => console.log(o));
