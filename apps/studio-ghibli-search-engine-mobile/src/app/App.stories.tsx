import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { AppRoot } from '.';

const props = {};

storiesOf('App', module).add('Primary', () => <AppRoot {...props} />);
