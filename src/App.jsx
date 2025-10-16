import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Components/Home";
import ProfileCardPage from "./Components/ProfileCardPage";
import Practice from "./Components/Content";
import CounterApp from "./Components/CounterApp";
import TodoList from "./Components/TodoList";

export let userContext = createContext();

export default function App() {

  const [user, setUser] = useState({name: "Thiru", role: "Frontend Developer", email: "thiru@example.com", phone: "123-456-7890"});

  
console.log(userContext);

  return (
    <BrowserRouter basename="/react-30days">
       <userContext.Provider value ={ {user} }>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/profile-card" element={<ProfileCardPage />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/practice-app" element={<Practice />} />
        <Route path="/todo-list" element={<TodoList />} />
       
      </Routes>
       </userContext.Provider>
    </BrowserRouter>
  );
}
