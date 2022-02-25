import React from "react";
import { render } from "@testing-library/react-native";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "redux-mock-store";

import { initialState } from "../reducers/rootReducer";

const mockStore = configureStore([]);
const store = mockStore(initialState);

const reduxRender = (ui, options) =>
  render(ui, {
    wrapper: ({ children }) => (
      <ReduxProvider store={store}>{children}</ReduxProvider>
    ),
    ...options,
  });

export { reduxRender, store };
