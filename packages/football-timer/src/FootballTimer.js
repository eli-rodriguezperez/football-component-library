import { html, css, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export class FootballTimer extends LitElement {
  static styles = css`
    :host {
      --_addedTimeBackgroundColor: var(
        --football-timer-added-time-background-color,
        #31424f
      );
      --_addedTimeColor: var(--football-timer-added-time-color, #d2e5f2);
      display: inline-flex;
      font-family: Helvetica Neue, Roboto, Arial, sans-serif;
      font-size: var(--football-timer-font-size, 2rem);
      font-weight: var(--football-timer-font-weight, lighter);
      color: var(--football-timer-text-color, #31424f);
    }

    :host([theme^='dark']) {
      --football-timer-added-time-background-color: #d2e5f2;
      --football-timer-added-time-color: #31424f;
      --football-timer-background-color: #31424f;
      --football-timer-text-color: #d2e5f2;
    }

    .addedTime {
      background-color: var(--_addedTimeBackgroundColor);
      padding: 0.25rem;
      border-radius: 3px;
      color: var(--_addedTimeColor);
    }

    .isAddedTime {
      --football-timer-background-color: var(--_addedTimeBackgroundColor);
      color: var(--_addedTimeColor);
    }

    .timer {
      padding: 0.25rem 0.5rem;
      border-radius: 3px;
      background-color: var(--football-timer-background-color, #d2e5f2);
    }

    .element {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .element ~ .element {
      margin-left: 0.5rem;
    }

    .adjustLeft {
      margin-left: 53px;
    }
  `;

  static properties = {
    minutes: {
      type: String,
    },
    seconds: {
      type: String,
    },
    addedTime: {
      type: String,
      attribute: 'added-time',
    },
  };

  constructor() {
    super();
    this.minutes = '00';
    this.seconds = '00';
    this.addedTime = '';
  }

  render() {
    return html`
      ${this.addedTime.length
        ? html`<section class="addedTime element">+${this.addedTime}</section>`
        : html``}
      <section
        class=${classMap({
          isAddedTime: this.addedTime.length,
          adjustLeft: !this.addedTime.length,
          element: true,
          timer: true,
        })}
      >
        ${this.minutes}:${this.seconds}
      </section>
    `;
  }
}
