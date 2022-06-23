import { Routes, Route } from "react-router-dom";


import { HOME } from "./routes";
import { Home } from "./views";

/**
 * main component containing router
 */
const App = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
    </Routes>
  );
}

export default App;
