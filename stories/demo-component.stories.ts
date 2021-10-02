import { html, TemplateResult } from 'lit';
import '../src/demo-component.js';

export default {
  title: 'DemoComponent',
  component: 'demo-component',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <demo-component style="--demo-component-background-color: ${backgroundColor}" .title=${title}></demo-component>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
