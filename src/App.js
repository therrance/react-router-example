import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Navigation = () => (
  <nav>
  <Link to="/one">One</Link>
  <Link to="/one/two">Two</Link>
  <Link to="/one/two/three">Three</Link>
</nav>
);

const One = () => <h1>One</h1>;

const Two = () => <h1>Two</h1>;

const Three = () => <h1>Three</h1>;

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/one" element={<One />} />
          <Route path="/one/two" element={<Two />} />
          <Route path="/one/two/three" element={<Three />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
