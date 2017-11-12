/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const myObservable = Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
});
const multiplyObservable = myObservable.map(o => o * 2);
const filterObservable = myObservable.filter(o => o < 3);
console.log('MY_OBSERVABLE');
myObservable.subscribe(o => console.log(o));
console.log('MULTIPLY_OBSERVABLE');
multiplyObservable.subscribe(o => console.log(o));
console.log('FILTER_OBSERVABLE');
filterObservable.subscribe(o => console.log(o));
