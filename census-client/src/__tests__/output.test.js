import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../store";

import Output from '../components/Output';

describe('Output component:', () => {
  
  const getComponent = (output = {}) => {
    const store = configureStore({
      output
    });
    return mount(
      <Provider store={store}>
        <Output />
      </Provider>
    );
  }

  it('should match the snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should display placeholder if no query is run', () => {
    const component = getComponent();
    expect(component.find('.response .placeholder')).toHaveLength(1);
    expect(component.find('.response .formatted-result')).toHaveLength(0);
    expect(component.find('.response .raw-response')).toHaveLength(0);
  });

  it('should display formatted result if query is run', () => {
    const component = getComponent({
      queryId: 1,
      response: {
        result: [],
        status: 'SUCCESS',
      },
    });
    expect(component.find('.response .placeholder')).toHaveLength(0);
    expect(component.find('.response .formatted-result')).toHaveLength(2);
    expect(component.find('.response .raw-response')).toHaveLength(2);
  });
});