/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';

// NORMAL
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Normal'), 3000);
});
myPromise.then(o => console.log(o));

// RXJS
const myObservable = Observable.create((observer) => {
  setTimeout(() => {
    observer.next('RxJS');
    observer.complete();
  }, 3000);
});
myObservable.subscribe(o => console.log(o));
