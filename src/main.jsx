import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// styles
import "./styles/index.css";
import "./styles/utils.css";
import "./styles/fonts.css";
import "./styles/colors.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
