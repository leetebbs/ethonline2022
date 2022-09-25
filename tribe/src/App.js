import "../src/App.js";
import Navbar from "./components/Navbar";
import Fetchmessages from "./pages/fetchmessages";
import Createmessage from "./pages/createmessage";
import Ipfstest from "./pages/ipfstest.js";
import CharactersList from "./pages/charactersList";
import LensRecommendedProfiles from "./pages/lensProfiles";
import GetProfile from "./pages/getProfile";
import GetPublications from "./pages/fetchPublications"
import { ethers } from "ethers";
import { useState } from "react";
import Web3Modal from "web3modal";

function App() {
  const [account, setAccount] = useState();



  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = provider.send("eth_requestAccounts", []).then((value) => {
    setAccount(value[0]);
  });
  const signer = provider.getSigner();

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="App">
          {/* <Fetchmessages/> */}
          {/* <Createmessage account={account}/> */}
          {/* <Ipfstest/> */}
          {/* <CharactersList /> */}
          {/* <LensRecommendedProfiles /> */}
          <GetProfile account={account} />
          {/* <GetPublications /> */}
        </div>
      </div>
    </>
  );
}

export default App;
