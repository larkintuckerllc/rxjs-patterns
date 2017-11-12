/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';

const myObservable = Observable.create((observer) => {
  setTimeout(() => {
    observer.next('RxJS A');
    setTimeout(() => {
      observer.next('RxJS B');
      setTimeout(() => {
        observer.next('RxJS C');
        observer.complete();
      }, 1000);
    }, 1000);
  }, 1000);
});
myObservable.subscribe(o => console.log(`First ${o}`));
myObservable.subscribe(o => console.log(`Second ${o}`));
