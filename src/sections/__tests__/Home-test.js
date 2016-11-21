import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

test('Check <Home /> is getting rendered properly without errors!' , () => {
  const component = renderer.create(
    <Home  />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
