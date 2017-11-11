'use strict';

var _Observable = require('rxjs/Observable');

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