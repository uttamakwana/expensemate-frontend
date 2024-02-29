import { Routes, Route } from "react-router-dom";
// pages
import { Landing, Login, Register } from "./pages";

const App = () => {
  return (
    <main className="main-app">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default App;
