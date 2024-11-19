import "./App.css";
import { DocxFile } from "./components/DocxPage";
import FooterApp from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { ImagesFIle } from "./components/ImagesPage";
import { VideosFile } from "./components/VideoPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideosFile />} />
        <Route path="/docx" element={<DocxFile />} />
        <Route path="/image" element={<ImagesFIle />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route
            path="/events"
            element={<Events />}
        />
        <Route
            path="/annual"
            element={<AnnualReport />}
        />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
            path="/sign-up"
            element={<SignUp />}
        /> */}
      </Routes>
      <FooterApp />
    </Router>
  );
}

export default App;
