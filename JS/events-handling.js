/* event emit - node.js */

const EventEmitter = require('events');

const element = new EventEmitter();
element.addListener('event1', () => {}); // 이벤트 콜백 바인딩, 여러번 등록됨
element.on('event2', () => {}); // 이벤트 콜백 바인딩, 여러번 등록됨
element.once('event3', () => {}); // 한 번만 실행됨

element.emit('event1'); // 이벤트 호출
element.removeAllListeners('event1'); // 이벤트 삭제
console.log(element.listenerCount('event1')); // 중복 확인


/* event emit - browser */

class MyClass extends EventTarget {
  emitEvent() {
    this.dispatchEvent(new Event('customEvent'));
  }
}

const instance = new MyClass();
instance.addEventListener('customEvent', (e) => {
  console.log('Instance fired "customEvent".', e);
});
instance.emitEvent();


/* global uncaughtException - node.js */

process.on('uncaughtException', (err) => {
  // ...
});


/* global uncaughtException - browser */

window.onError = function(message, source, lineno, colno, error) {
  // ...
}
