import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyCollectionPage from "./pages/MyCollectionPage";
import TemplatePage from "./pages/_TemplatePage";
import VerifyEmail from "./pages/VerifyEmail";
import PopUpLogin from "./components/PopUpLogin"; 
import './styles/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [token, setToken] = React.useState(localStorage.getItem('token'));
  const [isPopUpVisible, setIsPopUpVisible] = React.useState(false);
  const navigate = useNavigate();

  const handleCollectionClick = () => {
    if (!token) {
      setIsPopUpVisible(true); 
    } else {
      navigate('/collection'); 
    }
  };

  return (
    <>
      {isPopUpVisible && (
        <PopUpLogin
          onClose={() => setIsPopUpVisible(false)}
          onLogin={(newToken) => {
            setToken(newToken);
            setIsPopUpVisible(false);
            navigate('/collection');
          }}
        />
      )}
      <Routes>
        <Route path="/" element={<TemplatePage handleCollectionClick={handleCollectionClick} token={token} />}>
          <Route index element={<HomePage token={token} setToken={setToken} />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="collection" element={<MyCollectionPage token={token} setToken={setToken} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

