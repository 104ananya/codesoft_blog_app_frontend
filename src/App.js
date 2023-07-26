
import { Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";


function App() {
  return (
    <div className="App font-opensans">
      
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage/>} />
        {/* <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
