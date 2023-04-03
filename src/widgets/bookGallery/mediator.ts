// the Mediator class implements event bus approach and acts as a mediator between the two classes that need to communicate with each other.
// This class will listen for events emitted byt one class and pass data to the other class, with data being book category names in this case.
//This way, the two classes will be more decoupled and more modular.

export class Mediator {
  listeners: { [event: string]: Function[] };

  constructor() {
    this.listeners = {};
  }

  subscribe(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event: string, data: string) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((callback) => {
      callback(data);
    });
  }
}
