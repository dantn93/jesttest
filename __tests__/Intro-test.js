import 'react-native';
import React from 'react';
// import Stack from '../Intro';
import Home from '../Home';
const {
  createStackNavigator
} = require('react-navigation');
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const navigation = { navigate: jest.fn() };
  expect(renderer.create(<Home />)).toMatchSnapshot();
});