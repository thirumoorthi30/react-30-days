import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Components/Layout/Home";
import ProfileCardPage from "./Components/Profilepage/ProfileCardPage";
import Practice from "./Components/Products/Content";
import CounterApp from "./Components/CounterApp/CounterApp";
import TodoList from "./Components/TodoList/TodoList";
import Product from "./Components/Products/Product";
import ProductDetails1 from "./Components/Products/ProductDetails1";
import ProductList from "./Components/Products/ProductList";
import DigitalClock from "./Components/DigitalClock/DigitalClock";
import NavBar from "./Components/Layout/NavBar";
import JokeApp from "./Components/JokeApp/JokeApp";
import NewProducts from "./Components/Products/NewProducts";

export let userContext = createContext();

export default function App() {

  const [user, setUser] = useState({name: "Thiru", role: "Frontend Developer", email: "thiru@example.com", phone: "123-456-7890"});

  
console.log(userContext);

  return (
    <BrowserRouter basename="/react-30days">
       <userContext.Provider value ={ {user} }>
        <NavBar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/profile-card" element={<ProfileCardPage />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/practice-app/:name" element={<Practice />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/product" element={<Product />} >
          <Route index element={<ProductList />} />
          <Route path="details" element={<ProductDetails1 />} />
          <Route path="list" element={<ProductList />} />
        </Route>
        <Route path="/new-product" element = {<NewProducts />} />
        <Route path="/digital-clock" element = {<DigitalClock />} />
        <Route path="/joke-app" element = {<JokeApp />} />
       
      </Routes>
       </userContext.Provider>
    </BrowserRouter>
  );
}
