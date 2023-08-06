import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
