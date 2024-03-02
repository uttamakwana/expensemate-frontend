import { Routes, Route } from "react-router-dom";
// pages
import { Dashboard, Landing, Login, Register } from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main className="main-app">
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

export default App;
