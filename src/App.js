import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Popular from "./pages/popular";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Popular />
    </div>
  );
}

export default App;
