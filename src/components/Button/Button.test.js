import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { useEvent, within } from '@storybook/testing-library';
import '@storybook/testing-library';

import { Button } from './Button';

test('Should be rendered', () => {
  render(<Button>click</Button>);
  const button = screen.getByText('click');
  expect(button).not.toBeNull();
});
