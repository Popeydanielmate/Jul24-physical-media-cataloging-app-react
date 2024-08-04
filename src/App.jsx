import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyCollectionPage from "./pages/MyCollectionPage";
import Template from "./pages/_TemplatePage";
import VerifyEmail from "./pages/VerifyEmail";
import './styles/index.css';

function App() {
  const [token, setToken] = React.useState(localStorage.getItem('token'));

  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage setToken={setToken} />} />
        <Route path="collection" element={<MyCollectionPage token={token} />} />
        <Route path="verify-email" element={<VerifyEmail />} />
      </Route>
    </Routes>
  );
}

export default App;

