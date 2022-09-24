import "../src/App.js";
import Navbar from "./components/Navbar";
import Fetchmessages from "./pages/fetchmessages"
import Createmessage from "./pages/createmessage"
import Ipfstest from "./pages/ipfstest.js"
import CharactersList from "./pages/charactersList"
import LensRecommendedProfiles from "./pages/lensProfiles"
import GetProfile from "./pages/getProfile"



function App() {


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="App">
          {/* <Fetchmessages/> */}
          {/* <Createmessage/> */}
          {/* <Ipfstest/> */}
          {/* <CharactersList /> */}
          {/* <LensRecommendedProfiles /> */}
          <GetProfile />
        </div>
      </div>
    </>
  );
}

export default App;
