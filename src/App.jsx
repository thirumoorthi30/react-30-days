import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProfileCardPage from "./Components/ProfileCardPage";
import TodoList from "./Components/Content";
import CounterApp from "./Components/CounterApp";

export default function App() {
  return (
    <BrowserRouter basename="/react-30days">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-card" element={<ProfileCardPage />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}
