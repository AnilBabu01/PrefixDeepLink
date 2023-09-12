import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import ScrollToTop from "./helpers/ScrollToTop";
import sms from "./assets/sms.jpg";
function App() {
  return (
    <>
      {/* <a
        href="https://wa.me/918923361130?text=Hi!%20I%20have%20visited%20your%20institutional%20site!"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon" />
      </a> */}
      <img class="whatsapp_float" src={sms} alt="sms" />
      <Router>
        <ScrollToTop />
        <MainRoutes />
      </Router>
    </>
  );
}

export default App;
