import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Public from "./components/Public"
import Login from "./components/Login"
import About from "./components/About"
import Contact from "./components/Contact"
import './App.css';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
