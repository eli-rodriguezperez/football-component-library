import { html } from 'lit';
import '../../football-scoreboard.js';

const eibar = {
  name: 'SD Eibar',
  abbreviation: 'EIB',
  redCards: 0,
  goals: 3,
  color1: '#800013',
  color2: '#003471',
}

const cadiz = {
  name: 'Cadiz',
  abbreviation: 'CAD',
  redCards: 0,
  goals: 1,
  color1: '#F1C421',
}

export default {
  title: 'Example/FootballScoreboard',
  component: 'football-scoreboard',
  argTypes: {
    team1: { control: 'object' },
    team2: { control: 'object' },
    minutes: { control: 'text' },
    seconds: { control: 'text' },
    addedTime: { control: 'text' },
  },
};

function Template({ team1, team2, minutes = '00', seconds = '00', addedTime = '' }) {
  return html`
    <football-scoreboard
      .team1=${team1}
      .team2=${team2}
      .minutes=${minutes}
      .seconds=${seconds}
      .addedTime=${addedTime}
    >
    </football-scoreboard>
  `;
}

export const Regular = Template.bind({});
Regular.args = {
  team1: eibar,
  team2: cadiz,
  minutes: '59',
  seconds: '33'
}

export const AddedTime = Template.bind({});
AddedTime.args = {
  team1: eibar,
  team2: cadiz,
  minutes: '90',
  seconds: '00',
  addedTime: '3'
};

export const RedCard = Template.bind({});
RedCard.args = {
  team1: eibar,
  team2: {...cadiz, redCards: 1},
  minutes: '90',
  seconds: '00',
  addedTime: '3'
};
