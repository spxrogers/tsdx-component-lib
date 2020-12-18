import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thing1, Thing1Props } from './Thing1';

const meta: Meta = {
  title: 'Thing1',
  component: Thing1,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Thing1Props> = args => <Thing1 {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {};

export const Spaghetti = Template.bind({});
Spaghetti.args = {
  ...Default.args,
  tasteLike: '🍝',
};
