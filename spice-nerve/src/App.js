/* All Imported Component & Css */
import "./App.css";
import { AllRoute } from "./Component/AllRoute";
import Footer from "./Component/Footer";
import { Navbar } from "./Component/Navbar";
/* <--------------------------------> */

/* All Routes are here to redirect to any page */
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Footer />
    </div>
  );
}
/* <--------------------------------> */

export default App;
