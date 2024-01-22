import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import  {fetchDataFromApi}  from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Explore from "./pages/Explore";
import SearchResult from "./pages/SearchResult";
import Error404 from "./pages/Erro404";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  // API calling/Testing
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/:mediatype/:id" element={<Details />} />;
          <Route path="/search/:query" element={<SearchResult />} />;
          <Route path="/explore/:mediatype" element={<Explore />} />;
          <Route path="*" element={<Error404 />} />;
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
