'use strict';

var _Observable = require('rxjs/Observable');

_Observable.Observable.create(observer => {
  console.log('Hello');
  observer.next(1);
  observer.next(2);
  observer.next(3);
}); /* eslint no-console: "off" */