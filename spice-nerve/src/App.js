
import './App.css';
import { AllRoute } from './Component/AllRoute';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import { Home } from './Page/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Footer />

    </div>
  );
}

export default App;
