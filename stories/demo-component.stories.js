import { html } from 'lit';
import '../src/index.js';

export default {
  title: 'DemoComponent',
  component: 'demo-component',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <demo-component
      style="--demo-component-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </demo-component>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
