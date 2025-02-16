import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import LoaderTerminalComponent from "./assets/components/LoaderTerminal";

const SegmentsDocumentation = lazy(() => import('./assets/pages/ManualJsx'));
const Error404 = lazy(() => import('./assets/pages/Errors/404'));
const supportedLanguages = ["es", "en", "fr", "de", "zh"];
const LanguageRedirect: React.FC = () => {
  let lang = navigator.language.slice(0, 2).toLowerCase();
  if (!supportedLanguages.includes(lang)) {
    lang = "es"; 
  }
  return <Navigate to={`/${lang}/home`} replace />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoaderTerminalComponent/>}>
        <Routes>
          <Route path="/Documentacionsegmentslibrary/" element={<LanguageRedirect />} />
          <Route path="/Documentacionsegmentslibrary/:lang/home" element={<SegmentsDocumentation />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
