'use strict';

var _Observable = require('rxjs/Observable');

require('rxjs/add/observable/merge');

// NORMAL
/* eslint no-console: "off" */
const asyncA = () => new Promise(resolve => {
  setTimeout(() => resolve('Normal A'), 1000);
});
const asyncB = () => new Promise(resolve => {
  setTimeout(() => resolve('Normal B'), 1000);
});
const asyncC = () => new Promise(resolve => {
  setTimeout(() => resolve('Normal C'), 1000);
});

Promise.all([asyncA(), asyncB(), asyncC()]).then(([oA, oB, oC]) => {
  console.log(oA);
  console.log(oB);
  console.log(oC);
});

// RXJS
const obsA = _Observable.Observable.create(observer => {
  setTimeout(() => {
    observer.next('RxJS A');
    observer.complete();
  }, 1000);
});
const obsB = _Observable.Observable.create(observer => {
  setTimeout(() => {
    observer.next('RxJS B');
    observer.complete();
  }, 1000);
});
const obsC = _Observable.Observable.create(observer => {
  setTimeout(() => {
    observer.next('RxJS C');
    observer.complete();
  }, 1000);
});
const myObservable = _Observable.Observable.merge(obsA, obsB, obsC);
myObservable.subscribe(o => console.log(o));