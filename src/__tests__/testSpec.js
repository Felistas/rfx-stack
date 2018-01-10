// Link.react.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Link from '../Link.react';

const component = shallow(
  <Link page="http://www.facebook.com">Facebook</Link>,
);

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

test('Link changes the class when hovered', () => {
  
  expect(component).toMatchSnapshot();

  expect(component.instance().state.class).toEqual(STATUS.NORMAL)
  // manually trigger the callback
  component.props().onMouseEnter();

  expect(component.instance().state.class).toEqual(STATUS.HOVERED)
  // re-rendering
  expect(component.update()).toMatchSnapshot();

  // manually trigger the callback
  component.props().onMouseLeave();
  // re-rendering
  expect(component.update()).toMatchSnapshot();
});
