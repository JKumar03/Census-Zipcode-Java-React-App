import React from 'react';
import { shallow } from "enzyme";

import App from '../components/App';

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});