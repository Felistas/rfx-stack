import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../shared/containers/Home';
import store from '../shared/stores';


const component = mount(<Home store={store} />);

describe('App test', () => {
  it('should render as expected', () => {
    expect(component).toMatchSnapshot();
  });
});
