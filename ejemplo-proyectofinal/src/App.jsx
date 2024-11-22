import ChatEstilo from "./componentes/ChatEstilo/ChatEstilo";
import Home from "./componentes/Home/Home";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatEstilo />} />
      </Routes>
    </Router>
  )
}

export default App
