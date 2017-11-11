/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';

// NORMAL
const asyncA = () => new Promise((resolve) => {
  setTimeout(() => resolve('Normal A'), 1000);
});
const asyncB = () => new Promise((resolve) => {
  setTimeout(() => resolve('Normal B'), 1000);
});
const asyncC = () => new Promise((resolve) => {
  setTimeout(() => resolve('Normal C'), 1000);
});
asyncA()
  .then(o => console.log(o))
  .then(asyncB)
  .then(o => console.log(o))
  .then(asyncC)
  .then(o => console.log(o));


// RXJS
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
myObservable.subscribe(o => console.log(o));
