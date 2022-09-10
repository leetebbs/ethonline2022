import "../src/App.js";
import Navbar from "./components/Navbar";
import Fetchmessages from "./pages/fetchmessages"
import Createmessage from "./pages/createmessage"
import Ipfstest from "./pages/ipfstest.js"

function App() {


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="App">
          <Fetchmessages/>
          {/* <Createmessage/> */}
          {/* <Ipfstest/> */}
        </div>
      </div>
    </>
  );
}

export default App;
