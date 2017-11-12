'use strict';

var _Observable = require('rxjs/Observable');

const myObservable = _Observable.Observable.create(observer => {
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
}); /* eslint no-console: "off" */

myObservable.subscribe(o => console.log(`First ${o}`));
myObservable.subscribe(o => console.log(`Second ${o}`));