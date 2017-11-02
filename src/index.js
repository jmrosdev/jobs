import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { router } from "./router.js";

import { LocaleProvider } from 'antd';
import es_ES from 'antd/lib/locale-provider/es_ES';

// render the main component
ReactDOM.render(
  <LocaleProvider locale={es_ES}>
    <Provider store={store}>
      {router}
    </Provider>
  </LocaleProvider>,
  document.getElementById('app')
);
