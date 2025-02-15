import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SegmentsDocumentation from './assets/pages/ManualJsx';

const App: React.FC = () => {
  return (
    <Router>  
      <Routes>  {/* Agregamos el contenedor <Routes> */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<SegmentsDocumentation />} />
        <Route path="*" element={<SegmentsDocumentation />} />
      </Routes>
    </Router>
  );
}

export default App;
