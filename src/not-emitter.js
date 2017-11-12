/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';

// PROMISE
const myPromise = new Promise((resolve) => {
  console.log('Hello from Promise');
  resolve(1);
});
myPromise.then(o => console.log(o));
myPromise.then(o => console.log(o));

// OBSERVABLE
const myObservable = Observable.create((observer) => {
  console.log('Hello from Observable');
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
myObservable.subscribe(o => console.log(o));
myObservable.subscribe(o => console.log(o));
