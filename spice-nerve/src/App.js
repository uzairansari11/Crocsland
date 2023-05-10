/* All Imported Component & Css */
import "./App.css";
import { AllRoute } from "./Component/AllRoute";
import Footer from "./Component/Footer";
import Navbar1 from "./Component/Navbar1";
/* <--------------------------------> */

/* All Routes are here to redirect to any page */
function App() {
  return (
    <div className="App">
      <Navbar1 />
      <AllRoute />
      <Footer />
    </div>
  );
}
/* <--------------------------------> */

export default App;
