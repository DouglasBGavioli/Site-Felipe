import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import "./globalStyle.css"
import { Manifesto } from "./Pages/Manifesto";
import { Historico } from "./Pages/Historico";

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route index element={<Home />} />
        <Route path={"/manifesto"} element={<Manifesto />} />
        <Route path={"/historico"} element={<Historico />} />

        {/* <Route path="contact" element={<Contact />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
