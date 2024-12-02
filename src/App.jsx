import './App.css';
import Layout from './components/Layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Trips from './pages/Trips.tsx';
import Impact from './pages/Impact.tsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>} />
            <Route path="trips" element={<Trips/>} />
            <Route path="impact" element={<Impact />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
