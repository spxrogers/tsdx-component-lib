import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Thing2Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  tasteLike?: string;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing2 component. Neat!
 */
export const Thing2: FC<Thing2Props> = ({ children, tasteLike }) => {
  return (
    <div>
      {children ||
        `the snozzberries taste like ${tasteLike || 'snozzberries2'}`}
    </div>
  );
};
