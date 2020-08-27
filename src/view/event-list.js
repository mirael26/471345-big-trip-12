import {createElement} from "../util.js";

const createEventListTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class EventList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEventListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
