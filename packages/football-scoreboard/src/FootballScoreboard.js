import { html, css, LitElement } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import '@football-component-library/football-timer/football-timer.js';

export class FootballScoreboard extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: Helvetica Neue, Roboto, Arial, sans-serif;
      font-size: var(--football-scoreboard-font-size, 2rem);
      font-weight: var(--football-scoreboard-font-weight, lighter);
      color: var(--football-timer-text-color, #31424f);
    }

    .element {
      padding: 0.25rem;
      background-color: var(--football-scoreboard-background-color-default, #d2e5f2);
      border-radius: 3px;
    }

    .team-section {
      display: flex;
      padding: 0.25rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 4rem;
    }

    .team-title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: var(--football-scoreboard-team-title-font-size, 1.5rem);
      font-weight: var(--football-scoreboard-team-title-font-weight, normal);
      background-color: rgb(233, 246, 255);
      margin: 0;
      margin-bottom: 0.25rem;
      border-radius: 2px;
      width: 100%;
    }

    .team-goal {
      display: flex;
      justify-content: center;
      background-color: rgb(233, 246, 255);
      border-radius: 2px;
      align-items: center;
      font-size: 2rem;
      font-weight: normal;
      margin: 0;
      width: 2rem;
      border: solid 1px #31424f;
    }

    .team-goal ~ .team-goal {
      margin-left: 0.25rem;
    }

    .goals {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: var(--football-scoreboard-background-color-default, #d2e5f2);
      padding: 0.25rem;
      border-radius: 3px;
    }

    .colors {
      width: 100%;
      display: flex;
      height: 0.25rem;
      border-radius: 2px;
    }
  `;

  /**
    * Team Object
    * team1 = {
      *   name: 'SD Eibar',
      *   abbreviation: 'EIB',
      *   redCards: 0,
      *   goals: 3,
      *   color1: 'red',
      *   color2: 'blue',
      * }
    *
    * */

    static properties = {
      team1: { type: Object },
      team2: { type: Object },
      minutes: { type: String },
      seconds: { type: String },
      addedTime: {
        type: String,
        attribute: 'added-time',
      },
    };

  constructor() {
    super();
    this.team1 = undefined;
    this.team2 = undefined;
    this.minutes = '00';
    this.seconds = '00';
    this.addedTime = '';
  }

  team(team) {
    return team ? html`
      <h2 class="team-title">${team.abbreviation.toUpperCase()}</h2>
      <div class="colors">
        <span style=${styleMap({backgroundColor: team.color1, width: '100%'})}></span>
      ${team.color2 ? html`
        <span style=${styleMap({backgroundColor: team.color2, width: '100%'})}></span>
        <span style=${styleMap({backgroundColor: team.color1, width: '100%'})}></span>
        <span style=${styleMap({backgroundColor: team.color2, width: '100%'})}></span>
        <span style=${styleMap({backgroundColor: team.color1, width: '100%'})}></span>
        `: html``}
      </div>
    `: html``;
  }

  goal(team) {
    return team ? html`
      <h1 class="team-goal">${team.goals}</h1>
    `: html``;
  }

  render() {
    return html`
      <section>
      <football-timer .minutes=${this.minutes} .seconds=${this.seconds} .addedTime=${this.addedTime}></football-timer>
      </section>
      <section class="team-section element">
        ${this.team(this.team1)}
      </section>
      <section class="goals">
        ${this.goal(this.team1)}
        ${this.goal(this.team2)}
      </section>
      <section class="team-section element">
        ${this.team(this.team2)}
      </section>
      `;
  }
}
