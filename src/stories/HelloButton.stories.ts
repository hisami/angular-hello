import { HelloButtonComponent } from '../app/components/hello-button/hello-button.component'
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'HelloButton',
  component: HelloButtonComponent,
};

export const Hisamitsu = () => ({
  component: HelloButtonComponent,
  props: {
    name: text('name', 'foo'),
    hello: action('clicked!'),
  },
});
Hisamitsu.story = {
  parameters: {
    notes: `
    <h3>Notes</h3>
    <h2>Hisamitsu</h2>
    `,
  }
}