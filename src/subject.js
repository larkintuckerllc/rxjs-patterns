/* eslint no-console: "off" */
import { Subject } from 'rxjs';

const subject = new Subject();
subject.subscribe({
  next: o => console.log(`observer A: ${o}`),
});
subject.subscribe({
  next: o => console.log(`observer B: ${o}`),
});
subject.next(1);
subject.next(2);
