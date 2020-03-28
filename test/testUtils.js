import checkPropTypes from "check-prop-types";
import rootReducer from "../src/redux/reducers";
import { createStore } from "redux";

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, props) => {
  const propsError = checkPropTypes(
    component.propTypes,
    props,
    "prop",
    component.name
  );
  expect(propsError).toBeUndefined();
};
