import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Components/Home";
import ProfileCardPage from "./Components/ProfileCardPage";
import Practice from "./Components/Content";
import CounterApp from "./Components/CounterApp";
import TodoList from "./Components/TodoList";
import Product from "./Components/Product";
import ProductDetails1 from "./Components/ProductDetails1";
import ProductList from "./Components/ProductList";
import DigitalClock from "./Components/DigitalClock";

export let userContext = createContext();

export default function App() {

  const [user, setUser] = useState({name: "Thiru", role: "Frontend Developer", email: "thiru@example.com", phone: "123-456-7890"});

  
console.log(userContext);

  return (
    <BrowserRouter basename="/react-30days">
       <userContext.Provider value ={ {user} }>
      <Routes>
       
        <Route path="/home" element={<Home />} />
        <Route path="/profile-card" element={<ProfileCardPage />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/practice-app/:name" element={<Practice />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/product" element={<Product />} >
          <Route index element={<ProductDetails1 />} />
          <Route path="details" element={<ProductDetails1 />} />
          <Route path="list" element={<ProductList />} />
        </Route>
        <Route path="/digital-clock" element = {<DigitalClock />} />
       
      </Routes>
       </userContext.Provider>
    </BrowserRouter>
  );
}
