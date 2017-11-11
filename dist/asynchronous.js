'use strict';

var _Observable = require('rxjs/Observable');

/*
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

const myArray = [1, 2, 3];

// NORMAL
console.log('Normal');
const myNewArray = myArray.map(o => `${o.toString()} + !!!`);
myNewArray.map(o => console.log(o));

// RXJS
console.log('RxJS');
const myObservable = Observable.from(myArray).map(o => `${o.toString()} + !!!`);
myObservable.subscribe(o => console.log(o));
*/

// NORMAL
const myPromise = new Promise(resolve => {
  setTimeout(() => resolve('Normal'), 3000);
}); /* eslint no-console: "off" */

myPromise.then(o => console.log(o));

// RXJS
const myObservable = _Observable.Observable.create(observer => {
  setTimeout(() => {
    observer.next('RxJS');
    observer.complete();
  }, 3000);
});
myObservable.subscribe(o => console.log(o));