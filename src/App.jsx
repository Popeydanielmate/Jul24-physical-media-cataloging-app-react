import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyCollectionPage from "./pages/MyCollectionPage";
import Template from "./pages/_TemplatePage";
import VerifyEmail from "./pages/VerifyEmail";
import './styles/index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        <Route path="collection" element={<MyCollectionPage username="Popey" />} />
        <Route path="verify-email" element={<VerifyEmail />} /> {/* Add this route */}
      </Route>
    </Routes>
  );
}

export default App;
