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
    // Establecemos el basename para que todas las rutas sean relativas a "/Documentacionsegmentslibrary"
    <Router basename="/Documentacionsegmentslibrary">
      <Suspense fallback={<LoaderTerminalComponent />}>
        <Routes>
          <Route path="/" element={<LanguageRedirect />} />
          <Route path="/:lang/home" element={<SegmentsDocumentation />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
