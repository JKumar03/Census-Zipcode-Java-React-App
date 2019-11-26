import React from 'react';
import { Provider } from "react-redux";
import QueriesPage from "../QueriesPage";
import configureStore from '../../store';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QueriesPage />
      </Provider>
    </div>
  );
}

export default App;
