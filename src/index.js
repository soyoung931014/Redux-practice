import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
 /* import { Provider } from 'react-redux'
 import store from './store' */

ReactDOM.render(
/* <Provider store={store}>
<App></App>
</Provider>,  */
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById("root"));


 