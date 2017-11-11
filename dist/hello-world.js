'use strict';

var _Observable = require('rxjs/Observable');

require('rxjs/add/observable/from');

require('rxjs/add/operator/map');

const myArray = [1, 2, 3];

// NORMAL
/* eslint no-console: "off" */
console.log('Normal');
const myNewArray = myArray.map(o => `${o.toString()} + !!!`);
myNewArray.map(o => console.log(o));

// RXJS
console.log('RxJS');
const myObservable = _Observable.Observable.from(myArray).map(o => `${o.toString()} + !!!`);
myObservable.subscribe(o => console.log(o));