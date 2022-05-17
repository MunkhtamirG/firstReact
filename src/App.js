import MainForContext from "./components/MainForContext";
import MainHeader from "./components/MainHeader";
import { Route, Routes } from "react-router";
import MainPlayer from "./components/MainPlayer";
import MainAbout from "./components/MainAbout";
import NotFound from "./components/NotFound";
import "./App.css";
function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainForContext />} />
        <Route path="/player" element={<MainPlayer />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
