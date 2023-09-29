import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MainRoute from "./Router/MainRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
      <Footer />
    </div>
  );
}

export default App;
