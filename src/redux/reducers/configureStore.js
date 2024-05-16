import { legacy_createStore as createStore } from "redux";

import reducers from "./index";

function configureStore() {
  return createStore(reducers);
}

export default configureStore;
