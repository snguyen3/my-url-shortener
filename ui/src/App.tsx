import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/Home";
import HandleRedirectContainer from "./containers/HandleRedirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/:slug" element={<HandleRedirectContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
