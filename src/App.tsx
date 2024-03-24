import Calculator from "./components/Calculator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Calculator />
    </div>
  );
}

export default App;
