import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import DetailFanletter from "pages/DetailFanletter";
import LoginPage from "pages/LoginPage";
import ProfilePage from "pages/ProfilePage";

const Router = () => {
  //팬레터 리스트
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home/:id" element={<Home />} />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route path="detail/:id" element={<DetailFanletter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
