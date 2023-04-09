import { html } from 'lit';
import '../../football-scoreboard.js';

export default {
  title: 'Example/FootballScoreboard',
  component: 'football-scoreboard',
  argTypes: {
    header: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

function Template({ header = 'Hello world', counter = 5, textColor, slot }) {
  return html`
    <football-scoreboard
      style="--football-scoreboard-text-color: ${textColor || 'black'}"
      .header=${header}
      .counter=${counter}
    >
      ${slot}
    </football-scoreboard>
  `;
}

export const Regular = Template.bind({});

export const A11yFail = Template.bind({});
A11yFail.args = {
  header: 'My header',
  textColor: '#efb1b1',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
