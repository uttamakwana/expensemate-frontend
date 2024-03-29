import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// styles
import "./styles/index.css";
import "./styles/utils.css";
import "./styles/fonts.css";
import "./styles/colors.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
