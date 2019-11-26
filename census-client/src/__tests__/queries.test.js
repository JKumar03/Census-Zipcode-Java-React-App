import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../store";

import Query from '../components/Query';

describe('Query component:', () => {
  let query = null;
  let component = null;
  const store = configureStore();

  beforeEach(() => {
    query = {
      queryId: 1,
      title: 'Sample title',
      endpoint: "http://example.com",
      method: 'GET',
      params: {
        dummy: 1
      }
    };
    component = mount(
      <Provider store={store}>
        <Query query={query} />
      </Provider>
    );
  });

  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('displays the correct title', () => {
    expect(component.find('.card-header').text()).toEqual(query.title);
  });

  it('displays the correct endpoint', () => {
    expect(component.find('.card-body .endpoint').text()).toEqual(query.endpoint);
  });

  it('displays the correct params', () => {
    expect(component.find('.card-body input')).toHaveLength(Object.keys(query.params).length);
  });

  it('displays the correct method', () => {
    expect(component.find('.card-body .method').text()).toEqual(query.method);
  });
});
