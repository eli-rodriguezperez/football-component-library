import { html } from 'lit';
import '../../football-timer.js';

export default {
  title: 'Example/FootballTimer',
  component: 'football-timer',
  argTypes: {
    minutes: { control: 'text' },
    seconds: { control: 'text' },
    addedTime: { control: 'text' },
  },
};

function Template({ minutes = '33', seconds = '59', addedTime = '' }) {
  return html`
    <football-timer
      .minutes=${minutes}
      .seconds=${seconds}
      .addedTime=${addedTime}
    >
    </football-timer>
  `;
}

export const Regular = Template.bind({});

export const AddedTime = Template.bind({});
AddedTime.args = {
  minutes: '45',
  seconds: '00',
  addedTime: '3',
};
