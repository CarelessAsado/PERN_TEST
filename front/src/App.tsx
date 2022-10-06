import { Routes, Route } from "react-router-dom";
import Pern from "pages/Pern";
import { FRONTEND_ENDPOINTS } from "config/constants";

function App() {
  return (
    <>
      <Routes>
        <Route path={FRONTEND_ENDPOINTS.PERN} element={<Pern />} />
      </Routes>
    </>
  );
}

export default App;
