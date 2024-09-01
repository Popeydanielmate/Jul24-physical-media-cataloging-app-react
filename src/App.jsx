import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyCollectionPage from "./pages/MyCollectionPage";
import Template from "./pages/_TemplatePage";
import VerifyEmail from "./pages/VerifyEmail";
import PopUpLogin from "./components/PopUpLogin"; 
import './styles/index.css';

function App() {
  const [token, setToken] = React.useState(localStorage.getItem('token'));
  const [isPopUpVisible, setIsPopUpVisible] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log('App loaded. Token:', token);
  }, [token]);

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
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage token={token} setToken={setToken} handleCollectionClick={handleCollectionClick} />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="collection" element={<MyCollectionPage token={token} setToken={setToken} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
