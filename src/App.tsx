import { Routes, Route, Navigate } from "react-router-dom";
import {
  endpointsApp,
  endpointsAppChilds,
} from "./endpoints.tsx";

import ProtectedRoute from "./ProtectedRoute";
import Principal from "./routes/Principal/index.tsx";
import Home from "./routes/Pages/Home/index.tsx";
// import Chatbot from "./routes/Pages/Chatbot"
import Oficinas from "./routes/Pages/Oficinas/index.tsx";
import Bot from "./routes/Pages/Bot/index.tsx";
import Chatbot from "./routes/Pages/Chatbot/index.tsx";


function App() {
  return (
    <Routes>
      {endpointsApp.map((endpoint) => (
        <Route path={endpoint.caminho} element={endpoint.elemento} />
      ))}
      <Route
        path="/principal"
        element={
          <ProtectedRoute>
            <Principal />
          </ProtectedRoute>
        }
      >
        {endpointsAppChilds.map((child) => (
          <Route path={child.caminho} element={child.elemento} />
        ))}
        <Route path="/principal/home" element={<Home />}>
        </Route>
      </Route>
        <Route path="/chatbot" element={<Chatbot/>}>
          <Route path="/chatbot/oficinas" element={<Oficinas/>}></Route>
          <Route path="/chatbot/bot" element={<Bot/>}></Route>
          <Route path="/chatbot" element={<Navigate to="/chatbot/bot"></Navigate>}></Route>

        </Route>
    </Routes>
  );
}

export default App;
