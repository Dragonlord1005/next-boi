import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { NavBar } from './Navbar';

storiesOf('NavBar', module).add('NavBar', () => (
  <StoryWrapper attributes={attributes} component={NavBar} />
));