import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thing2, Thing2Props } from './Thing2';

const meta: Meta = {
  title: 'Thing2',
  component: Thing2,
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

const Template: Story<Thing2Props> = args => <Thing2 {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
