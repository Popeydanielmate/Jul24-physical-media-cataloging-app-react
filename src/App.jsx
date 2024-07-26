import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyCollectionPage from "./pages/MyCollectionPage";
import Template from "./pages/_TemplatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        <Route path="collection" element={<MyCollectionPage username="JohnDoe" />} />
      </Route>
    </Routes>
  );
}

export default App;
